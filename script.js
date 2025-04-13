// ポッドキャストデータを管理するクラス
class PodcastManager {
    constructor() {
        this.podcasts = JSON.parse(localStorage.getItem('podcasts')) || [];
        this.lastUpdated = localStorage.getItem('lastUpdated') || new Date().toISOString();
    }

    // ポッドキャストを並べ替え
    sortPodcasts(sortBy) {
        const sortedPodcasts = [...this.podcasts];
        if (sortBy === 'title') {
            sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
        } else if (sortBy === 'category') {
            sortedPodcasts.sort((a, b) => a.category.localeCompare(b.category, 'ja'));
        } else {
            // デフォルトはタイトル順
            sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
        }
        return sortedPodcasts;
    }

    getLastUpdated() {
        return this.lastUpdated;
    }
}

// UIを管理するクラス
class PodcastUI {
    constructor(podcastManager) {
        this.podcastManager = podcastManager;
        this.podcastList = document.getElementById('podcast-list');
        this.lastUpdatedElement = document.getElementById('last-updated');
        this.sortOption = document.getElementById('sort-option');
        
        // イベントリスナー設定
        this.sortOption.addEventListener('change', () => this.renderPodcastList());
        
        // 初期表示
        this.updateLastUpdatedUI();
        this.renderPodcastList();
    }

    renderPodcastList() {
        const sortBy = this.sortOption.value;
        const sortedPodcasts = this.podcastManager.sortPodcasts(sortBy);
        
        this.podcastList.innerHTML = '';
        
        if (sortedPodcasts.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 2;
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
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        this.lastUpdatedElement.textContent = date.toLocaleDateString('ja-JP', dateOptions);
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    const podcastManager = new PodcastManager();
    const podcastUI = new PodcastUI(podcastManager);
});