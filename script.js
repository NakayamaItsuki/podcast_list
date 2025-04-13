// ポッドキャストデータを管理するクラス
class PodcastManager {
    constructor() {
        this.podcasts = JSON.parse(localStorage.getItem('podcasts')) || [
            {
                id: '1',
                title: "安住紳一郎の日曜天国 - TBS RADIO",
                category: "お笑い",
                url: "https://www.tbsradio.jp/azumi/",
                image: "https://www.tbsradio.jp/azumi/images/program/main_img.jpg",
                dateAdded: new Date('2025-01-01').toISOString()
            },
            {
                id: '2',
                title: "歴史を面白く学ぶコテンラジオ（COTEN RADIO）- COTEN inc.",
                category: "その他",
                url: "https://coten.co.jp/radio/",
                image: "https://coten.co.jp/wp-content/uploads/2020/01/cropped-COTEN-RADIO_icon.png",
                dateAdded: new Date('2025-01-10').toISOString()
            },
            {
                id: '3',
                title: "マユリカのうなげなりん！！ - ラジオ関西",
                category: "お笑い",
                url: "https://jocr.jp/mayurica/",
                image: "https://jocr.jp/wp-content/uploads/2022/03/mayurica_600.jpg",
                dateAdded: new Date('2025-02-05').toISOString()
            },
            {
                id: '4',
                title: "芹ゆう子　お気づきかしら（仮）- TBS RADIO",
                category: "その他",
                url: "https://www.tbsradio.jp/seri/",
                image: "https://www.tbsradio.jp/seri/images/program/main_img.jpg",
                dateAdded: new Date('2025-03-20').toISOString()
            }
        ];
        
        // 初期データが存在しなかった場合はローカルストレージに保存
        if (!localStorage.getItem('podcasts')) {
            this.savePodcasts();
        }
        
        this.lastUpdated = localStorage.getItem('lastUpdated') || new Date('2025-04-13').toISOString();
    }

    // ポッドキャストを追加
    addPodcast(podcast) {
        podcast.id = Date.now().toString();
        podcast.dateAdded = new Date().toISOString();
        this.podcasts.push(podcast);
        this.updateLastUpdated();
        this.savePodcasts();
        return podcast;
    }

    // ポッドキャストを更新
    updatePodcast(id, updatedPodcast) {
        const index = this.podcasts.findIndex(podcast => podcast.id === id);
        if (index !== -1) {
            this.podcasts[index] = { ...this.podcasts[index], ...updatedPodcast };
            this.updateLastUpdated();
            this.savePodcasts();
            return true;
        }
        return false;
    }

    // ポッドキャストを削除
    removePodcast(id) {
        this.podcasts = this.podcasts.filter(podcast => podcast.id !== id);
        this.updateLastUpdated();
        this.savePodcasts();
    }

    // ポッドキャストを取得
    getPodcasts() {
        return this.podcasts;
    }

    // ポッドキャストIDで取得
    getPodcastById(id) {
        return this.podcasts.find(podcast => podcast.id === id);
    }

    // ポッドキャストを並べ替え
    sortPodcasts(sortBy) {
        const sortedPodcasts = [...this.podcasts];
        switch (sortBy) {
            case 'title':
                sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
                break;
            case 'category':
                sortedPodcasts.sort((a, b) => a.category.localeCompare(b.category, 'ja'));
                break;
            default:
                // デフォルトはタイトル順
                sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
        }
        return sortedPodcasts;
    }

    // 更新日時を取得
    getLastUpdated() {
        return this.lastUpdated;
    }

    // 更新日時を更新
    updateLastUpdated() {
        this.lastUpdated = new Date().toISOString();
        localStorage.setItem('lastUpdated', this.lastUpdated);
    }

    // ポッドキャストをローカルストレージに保存
    savePodcasts() {
        localStorage.setItem('podcasts', JSON.stringify(this.podcasts));
    }
}

// UIを管理するクラス
class PodcastUI {
    constructor(podcastManager) {
        this.podcastManager = podcastManager;
        this.podcastList = document.getElementById('podcast-list');
        this.lastUpdatedElement = document.getElementById('last-updated');
        this.adminPanel = document.getElementById('admin-panel');
        this.toggleAdminBtn = document.getElementById('toggle-admin');
        this.podcastForm = document.getElementById('podcast-form');
        this.cancelEditBtn = document.getElementById('cancel-edit');
        this.sortOption = document.getElementById('sort-option');
        this.actionsHeader = document.getElementById('actions-header');
        
        // 認証関連の要素
        this.authModal = document.getElementById('auth-modal');
        this.authSubmitBtn = document.getElementById('auth-submit');
        this.authCancelBtn = document.getElementById('auth-cancel');
        this.adminPassword = document.getElementById('admin-password');
        this.authErrorMsg = document.getElementById('auth-error');
        
        // 認証設定
        this.correctPassword = "podcast2025"; // 実際のパスワードを設定（平文はセキュリティ上好ましくありませんが、簡易認証のため）
        this.isAuthenticated = false;
        
        this.isAdminMode = false;
        this.currentEditId = null;
        
        this.setupEventListeners();
        this.updateLastUpdatedUI();
        this.renderPodcastList();
    }

    setupEventListeners() {
        // 管理モードトグルボタン
        this.toggleAdminBtn.addEventListener('click', () => this.handleAdminToggle());
        
        // 認証関連のイベントリスナー
        this.authSubmitBtn.addEventListener('click', () => this.authenticateAdmin());
        this.authCancelBtn.addEventListener('click', () => this.hideAuthModal());
        this.adminPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.authenticateAdmin();
            }
        });
        
        // フォーム送信イベントリスナー
        this.podcastForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        
        // 編集キャンセルボタン
        this.cancelEditBtn.addEventListener('click', () => this.cancelEdit());
        
        // ソートオプション変更
        this.sortOption.addEventListener('change', () => this.renderPodcastList());
        
        // リストのクリックイベントリスナー（編集と削除ボタン用）
        this.podcastList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const podcastId = e.target.dataset.id;
                if (confirm('このポッドキャストを削除してもよろしいですか？')) {
                    this.podcastManager.removePodcast(podcastId);
                    this.renderPodcastList();
                    this.updateLastUpdatedUI();
                }
            } else if (e.target.classList.contains('edit-btn')) {
                const podcastId = e.target.dataset.id;
                this.editPodcast(podcastId);
            }
        });
    }
    
    // 管理モードトグルの処理
    handleAdminToggle() {
        if (!this.isAuthenticated) {
            // 認証されていない場合は認証モーダルを表示
            this.showAuthModal();
        } else {
            // 認証済みの場合は管理モードを切り替え
            this.toggleAdminMode();
        }
    }
    
    // 認証モーダルの表示
    showAuthModal() {
        this.authModal.style.display = "block";
        this.adminPassword.value = "";
        this.authErrorMsg.textContent = "";
        this.adminPassword.focus();
    }
    
    // 認証モーダルを非表示
    hideAuthModal() {
        this.authModal.style.display = "none";
    }
    
    // 管理者認証処理
    authenticateAdmin() {
        const password = this.adminPassword.value;
        
        if (password === this.correctPassword) {
            this.isAuthenticated = true;
            this.hideAuthModal();
            this.toggleAdminMode();
        } else {
            this.authErrorMsg.textContent = "パスワードが正しくありません";
            this.adminPassword.focus();
        }
    }

    toggleAdminMode() {
        this.isAdminMode = !this.isAdminMode;
        
        if (this.isAdminMode) {
            this.adminPanel.classList.add('active');
            this.actionsHeader.classList.remove('hidden');
            this.toggleAdminBtn.textContent = '通常モード';
        } else {
            this.adminPanel.classList.remove('active');
            this.actionsHeader.classList.add('hidden');
            this.toggleAdminBtn.textContent = '管理モード';
            this.cancelEdit();
        }
        
        this.renderPodcastList();
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const title = document.getElementById('podcast-title').value;
        const category = document.getElementById('podcast-category').value;
        const url = document.getElementById('podcast-url').value;
        const image = document.getElementById('podcast-image').value;
        
        const podcast = {
            title,
            category,
            url,
            image
        };
        
        if (this.currentEditId) {
            // 更新処理
            this.podcastManager.updatePodcast(this.currentEditId, podcast);
            this.currentEditId = null;
        } else {
            // 新規追加処理
            this.podcastManager.addPodcast(podcast);
        }
        
        this.renderPodcastList();
        this.updateLastUpdatedUI();
        this.podcastForm.reset();
        document.getElementById('podcast-id').value = '';
    }

    editPodcast(id) {
        const podcast = this.podcastManager.getPodcastById(id);
        if (podcast) {
            document.getElementById('podcast-id').value = podcast.id;
            document.getElementById('podcast-title').value = podcast.title;
            document.getElementById('podcast-category').value = podcast.category;
            document.getElementById('podcast-url').value = podcast.url || '';
            document.getElementById('podcast-image').value = podcast.image || '';
            
            this.currentEditId = podcast.id;
            
            // フォームにスクロール
            this.adminPanel.scrollIntoView({ behavior: 'smooth' });
        }
    }

    cancelEdit() {
        this.podcastForm.reset();
        document.getElementById('podcast-id').value = '';
        this.currentEditId = null;
    }

    renderPodcastList() {
        // ソート適用
        const sortBy = this.sortOption ? this.sortOption.value : 'title';
        const sortedPodcasts = this.podcastManager.sortPodcasts(sortBy);
        
        this.podcastList.innerHTML = '';
        
        if (sortedPodcasts.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = this.isAdminMode ? 3 : 2;
            cell.textContent = 'ポッドキャストが登録されていません';
            cell.className = 'no-podcasts';
            row.appendChild(cell);
            this.podcastList.appendChild(row);
            return;
        }
        
        sortedPodcasts.forEach(podcast => {
            const row = document.createElement('tr');
            row.className = 'podcast-row';
            
            const titleCell = document.createElement('td');
            titleCell.className = 'podcast-title';
            titleCell.innerHTML = `
                ${podcast.image ? `<div class="podcast-image"><img src="${podcast.image}" alt="${podcast.title}"></div>` : ''}
                <div class="podcast-info">
                    <a href="${podcast.url}" target="_blank">${podcast.title}</a>
                </div>
            `;
            
            const categoryCell = document.createElement('td');
            categoryCell.className = 'podcast-category';
            categoryCell.innerHTML = `<span class="category-tag ${this.getCategoryClass(podcast.category)}">${podcast.category}</span>`;
            
            row.appendChild(titleCell);
            row.appendChild(categoryCell);
            
            if (this.isAdminMode) {
                const actionsCell = document.createElement('td');
                actionsCell.className = 'podcast-actions';
                actionsCell.innerHTML = `
                    <button class="edit-btn" data-id="${podcast.id}">編集</button>
                    <button class="delete-btn" data-id="${podcast.id}">削除</button>
                `;
                row.appendChild(actionsCell);
            }
            
            this.podcastList.appendChild(row);
        });
    }

    getCategoryClass(category) {
        const categoryMap = {
            'お笑い': 'comedy',
            'テクノロジー': 'technology',
            'ニュース': 'news',
            'その他': 'other'
        };
        
        return categoryMap[category] || 'default';
    }

    updateLastUpdatedUI() {
        const date = new Date(this.podcastManager.getLastUpdated());
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        this.lastUpdatedElement.textContent = date.toLocaleDateString('ja-JP', dateOptions);
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    const podcastManager = new PodcastManager();
    const podcastUI = new PodcastUI(podcastManager);
});