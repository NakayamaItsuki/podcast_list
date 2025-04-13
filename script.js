// ポッドキャストデータを管理するクラス
class PodcastManager {
    constructor() {
        this.podcasts = JSON.parse(localStorage.getItem('podcasts')) || [
            {
                id: '1',
                title: "安住紳一郎の日曜天国 - TBS RADIO",
                category: "お笑い",
                url: "https://open.spotify.com/show/2VHucnCgfUBzmEzSNTUUAf",
                image: "https://tbsradio.g.kuroco-img.app/v=1685581838/files/topics/602_ext_18_0.jpg?width=1920",
                dateAdded: new Date('2025-01-01').toISOString()
            },
            {
                id: '3',
                title: "マユリカのうなげなりん！！ - ラジオ関西",
                category: "お笑い",
                url: "https://open.spotify.com/show/223Rj9cjUGjcCY1CUP4ahP",
                image: "https://jocr.jp/wp/wp-content/uploads/2023/12/unagerorin_podcast.jpg",
                dateAdded: new Date('2025-02-05').toISOString()
            },
            {
                id: '1744546384677',
                title: "ヤーレンズのラジオの虎 - GERA",
                category: "お笑い",
                url: "https://play.gera.fan/episode/X5sdmW7gH8OvMd2b6uMc",
                image: "https://i.scdn.co/image/ab67656300005f1f7cdd30d3b2d143ee810e7512",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546467894',
                title: "ママタルトのラジオ母ちゃん - GERA",
                category: "お笑い",
                url: "https://play.gera.fan/episode/y8819cKOAAbSjMypRdsG",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/c0/7d/00/c07d0081-3437-9016-a773-6b66abfadd63/mza_18110984219562165589.jpg/1200x1200bf.webp",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546529373',
                title: "囲碁将棋の情熱スリーポイント - GERA",
                category: "お笑い",
                url: "https://play.gera.fan/episode/NtbTduLyZ4K33HOVfgb3",
                image: "https://pbs.twimg.com/profile_images/1537284695393996801/JNTknX66_400x400.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546599602',
                title: "エバーすの麻婆しゃぶしゃぶ - GERA",
                category: "お笑い",
                url: "https://play.gera.fan/episode/DRDzbAZmw1xiBuHP4d4z",
                image: "https://pbs.twimg.com/media/GVokyW2bEAAxO-_.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546745427',
                title: "エバースのモンキー125cc - stand.fm",
                category: "お笑い",
                url: "https://stand.fm/channels/6034153c85b142d0d8605c0f",
                image: "https://cdncf.stand.fm/images/01EZHQP0DBYC5H2M2W3MM0ZCD2.jpg?fit=scale-down&width=500&height=",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546792479',
                title: "令和ロマンのご様子 - stand.fm",
                category: "お笑い",
                url: "https://stand.fm/channels/5e1d9174a6c0bf4883c32ef4",
                image: "https://cdncf.stand.fm/images/01JHEVEFCKT2YCF63KFVEN3ZSK.jpg?fit=scale-down&width=200&height=",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546871271',
                title: "金魚番長のデメキン - stand.fm",
                category: "お笑い",
                url: "https://stand.fm/channels/60af53a1b82bc5e1f3b92aa8",
                image: "https://cdncf.stand.fm/images/01F89TPQCMFYMEEAZWB56VB3S5.jpg?fit=scale-down&width=200&height=",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744546955538',
                title: "真空ジェシカのギガラジオ - YouTube",
                category: "お笑い",
                url: "https://www.youtube.com/playlist?list=PLt14NVJhy_RBzGMqnYhAA5ZY1_7BgLFYi",
                image: "https://cdncf.stand.fm/images/01FSS5FDVCNS765WGM43ZD47BW.jpg?fit=scale-down&width=200&height=",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744547889022',
                title: "霜降り明星のオールナイトニッポン - ニッポン放送",
                category: "お笑い",
                url: "https://open.spotify.com/show/6BSPw7yLnXxb2jFuuCyXpb",
                image: "https://www.allnightnippon.com/wp/assets/uploads/2021/07/shimofuriANN-640.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744547961083',
                title: "カジュアルお好み焼き",
                category: "お笑い",
                url: "https://open.spotify.com/show/0PBuwpKaE9Xu279YHzBiDu",
                image: "https://i.scdn.co/image/ab6765630000ba8a513665ded5c610df7d4a9424",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744548006773',
                title: "真空ジェシカのラジオ父ちゃん - TBS RADIO",
                category: "お笑い",
                url: "https://open.spotify.com/show/0Jvqn7Ryzt3eoaR8xe2n1M",
                image: "https://i.scdn.co/image/ab6765630000ba8a063594c99dc33a0f96b9c8e4",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744548054213',
                title: "川島明のねごと - TBS RADIO",
                category: "お笑い",
                url: "https://open.spotify.com/show/58FisxP8FkZrpoyOytCp7J",
                image: "https://tbsradio.g.kuroco-img.app/v=1743471019/files/topics/618_ext_18_0.jpg?width=1920",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744548118894',
                title: "マヂカルラブリーのオールナイトニッポン0 - ニッポン放送",
                category: "お笑い",
                url: "https://open.spotify.com/show/2qAPheftYvi1L3MLJNo0KK",
                image: "https://i.scdn.co/image/ab6765630000ba8a0f0ece4b96bc84f05ac3001a",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744548189520',
                title: "金魚番長のデメキング - TBS RADIO",
                category: "お笑い",
                url: "https://open.spotify.com/show/2OODoXy0pkbH3HUwnvGzyE",
                image: "https://i.scdn.co/image/ab67656300005f1ffdf2c9b32718740d02fbf7f2",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549090880',
                title: " Data Science LG: 学び合う統計とデータサイエンス",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/a8/b0/7e/a8b07e43-aa56-3dff-c985-44679c8a1ffb/mza_2257751057252139696.jpg/170x170bb.png",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549139914',
                title: "白金鉱業.FM",
                category: "テクノロジー",
                url: "https://shirokane-kougyou.github.io/",
                image: "https://shirokane-kougyou.github.io/images/logo.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549215080',
                title: "となりのデータ分析屋さん",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/0Gz5oreIawFvFbvRD13BQU",
                image: "https://i.scdn.co/image/ab6765630000ba8a28774a652198d35c558fbf2d",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549253078',
                title: "TED Tech",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/1iwcjlgreRD0nJxgtdwMLx",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLn3zuUmstmpWcXfgEz98-X61q9Mx0nmYHTw&s",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549301919',
                title: "データ分析とマーケティングの掛け算ラジオ",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/6EUSXLtPLUjK4PntYawWbN",
                image: "https://i.scdn.co/image/ab67656300005f1f08e1643ae26b882548ecbab1",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549354960',
                title: "Naked Data Science",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/4Sacw5UzY7utm6coTEHS0h",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UXY4MLxSeAiKO-zLw3hK-6E2gqV2uQkm3g&s",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549401004',
                title: "Google DeepMind: The Podcast",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/39fjU5Q5L5UecTCRMeqjwb",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/ba/f3/63/baf363d0-598a-cc22-34a9-52ba955cb1c3/mza_14017418948880786929.jpg/1200x1200bf-60.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549462778',
                title: "NeuroRadio",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/2EA3S51dcQ0pRUTCX2ivsF",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhO0R7P9H7pSE6sT1d0rUxpZdrBsIAflbj1XwltDFKDDBTYjen3qnOqsACZaDdQQkDyo&usqp=CAU",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549539209',
                title: "The TED AI Show",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/6EBVhJvlnOLch2wg6eGtUa",
                image: "https://i.scdn.co/image/ab6765630000ba8a085cd77f2c2f9287796c5028",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549602012',
                title: "ジェーン・スーと堀井美香の「OVER THE SUN」 - TBS RADIO",
                category: "その他",
                url: "https://open.spotify.com/show/4sZYkG465UBmaZfmIqYJwN",
                image: "https://i.scdn.co/image/ab6765630000ba8a29222d90ce4e38da995cbfb3",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549730074',
                title: "エバースの野茂ラジオ - Artistspoken",
                category: "お笑い",
                url: "https://x.com/Artistspoken2/status/1789658451704246304",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/43/bb/de/43bbdea0-08ec-115e-9409-5990b6271c09/mza_11494412176189565444.jpg/1200x1200bf-60.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549831517',
                title: "Nature Podcast",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/2MydwKJpiKwiNRdxIzvFIt",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tYroqyQ8B_25pgNVN62qlbuoaWNpGTBVog&s",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549879006',
                title: "Science Magazine Podcast",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/6S1RCtUXQ7UvKUTB77x7xH",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/a7/98/28/a79828ba-d8bd-293e-cf84-ef7a5cccb089/mza_10257015145335192481.jpg/1200x1200bf.webp",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549923226',
                title: "紅しょうがは好きズキ！ - ラジオ関西",
                category: "お笑い",
                url: "https://open.spotify.com/show/4xCzGU1LAKfJtjs3WrCUUJ",
                image: "https://jocr.jp/wp/wp-content/uploads/2023/12/sukizuki_podcast.jpg",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744549976711',
                title: "はちくちダブルヒガシ",
                category: "お笑い",
                url: "https://open.spotify.com/show/1vbqV3iot2BOlFuc8HUHZ4",
                image: "https://i.scdn.co/image/ab67656300005f1f49f73f8ef4beecd4280a266e",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744550020748',
                title: "スタンド・バイ・見取り図 - TBS RADIO",
                category: "お笑い",
                url: "https://open.spotify.com/show/3TpTSTDnGvuNYfhQV6ZPLq",
                image: "https://i.scdn.co/image/ab67656300005f1f6a02403e8f11df421f724868",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744550166017',
                title: "フューチャートーク by NewsPicks",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/6C4NnHtxlGdkhZ3AsdlQE7",
                image: "https://i.scdn.co/image/ab6765630000ba8a1e866e49cd3f9bc796c7ccbc",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744550232919',
                title: "エンジニアトーク「ROLE MODEL」",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/3Chktgobog18SW10LjRC2Z",
                image: "https://i.scdn.co/image/ab6765630000ba8aa4ee83da13737764803fe5dc",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744550712883',
                title: "ながら日経",
                category: "ニュース",
                url: "https://open.spotify.com/show/06JU4MWlkjeCZHFoiTKVcy",
                image: "https://i.scdn.co/image/ab6765630000ba8a6f6c0717078a3741b737fa42",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744550819794',
                title: "おぎやはぎのメガネびいき - TBS RADIO",
                category: "お笑い",
                url: "https://open.spotify.com/show/1T1zGMKCnXRFL3Yf7bsPh2",
                image: "https://i.scdn.co/image/ab6765630000ba8a9c0f3e32800ffd111001a24f",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744551283916',
                title: "ゆるコンピュータ科学ラジオ",
                category: "お笑い",
                url: "https://open.spotify.com/show/32qgIhAHYnseWxiGyrFzSt",
                image: "https://yt3.googleusercontent.com/G3IDzlrrXdE5jF1VHZgkQzGuufbIngp7O572AuzdZE8ePnaSvTOyF2S7-yMA6T6W7BMWN5DZmg=s900-c-k-c0x00ffffff-no-rj",
                dateAdded: new Date('2025-04-13').toISOString()
            },
            {
                id: '1744551382138',
                title: "Rebuild",
                category: "テクノロジー",
                url: "https://open.spotify.com/show/4zqDMbg9WSpC5l81gJCfEc",
                image: "https://i.scdn.co/image/ab67656300005f1fd7d4e27ba058d4cbdb31436a",
                dateAdded: new Date('2025-04-13').toISOString()
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
    
    // 現在のポッドキャストデータをコードとしてフォーマット
    exportDataAsCode() {
        let formattedData = '';
        this.podcasts.forEach((podcast, index) => {
            formattedData += `            {
                id: '${podcast.id}',
                title: "${this.escapeString(podcast.title)}",
                category: "${podcast.category}",
                url: "${podcast.url}",
                image: "${podcast.image}",
                dateAdded: new Date('${new Date(podcast.dateAdded).toISOString().split('T')[0]}').toISOString()
            }${index < this.podcasts.length - 1 ? ',' : ''}\n`;
        });
        return formattedData;
    }
    
    // 文字列中の特殊文字をエスケープ
    escapeString(str) {
        return str.replace(/"/g, '\\"');
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
        
        // データエクスポート関連の要素
        this.exportDataBtn = document.getElementById('export-data');
        this.exportModal = document.getElementById('export-modal');
        this.exportCode = document.getElementById('export-code');
        this.copyCodeBtn = document.getElementById('copy-code');
        this.exportCloseBtn = document.getElementById('export-close');
        this.copyMessage = document.getElementById('copy-message');
        
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
        
        // データエクスポート関連のイベントリスナー
        this.exportDataBtn.addEventListener('click', () => this.showExportModal());
        this.copyCodeBtn.addEventListener('click', () => this.copyExportedCode());
        this.exportCloseBtn.addEventListener('click', () => this.hideExportModal());
        
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
    
    // データエクスポートモーダル表示
    showExportModal() {
        const formattedData = this.podcastManager.exportDataAsCode();
        this.exportCode.textContent = formattedData;
        this.exportModal.style.display = "block";
        this.copyMessage.textContent = "";
    }
    
    // データエクスポートモーダル非表示
    hideExportModal() {
        this.exportModal.style.display = "none";
    }
    
    // エクスポートされたコードをクリップボードにコピー
    copyExportedCode() {
        const code = this.exportCode.textContent;
        navigator.clipboard.writeText(code)
            .then(() => {
                this.copyMessage.textContent = "コピーしました！";
                setTimeout(() => {
                    this.copyMessage.textContent = "";
                }, 3000);
            })
            .catch(err => {
                console.error('コピーに失敗しました:', err);
                this.copyMessage.textContent = "コピーに失敗しました。手動でコピーしてください。";
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