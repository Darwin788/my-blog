// ==================== 导航栏交互 ====================
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// ==================== 文章数据（从 data.js 加载）================


// ==================== 渲染文章列表 ====================
function renderArticles(filter = 'all') {
    const container = document.getElementById('articles-list');
    if (!container) return;

    let filtered = articles;
    if (filter !== 'all') {
        filtered = articles.filter(a => a.tags.includes(filter) || a.category === filter);
    }

    container.innerHTML = filtered.map(article => `
        <article class="card article-card" onclick="location.href='articles/${article.id}.html'">
            <div class="meta">${article.date} · ${article.category}</div>
            <h3>${article.title}</h3>
            <p class="excerpt">${article.excerpt}</p>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');
}

// ==================== 渲染归档 ====================
function renderArchive() {
    const container = document.getElementById('archive-content');
    if (!container) return;

    // 按年份分组
    const years = {};
    articles.forEach(article => {
        const year = article.date.split('-')[0];
        if (!years[year]) years[year] = [];
        years[year].push(article);
    });

    // 渲染时间线
    container.innerHTML = Object.keys(years).sort((a, b) => b - a).map(year => `
        <div class="archive-year">
            <h3>${year}年</h3>
            <ul class="archive-list">
                ${years[year].map(article => `
                    <li class="archive-item">
                        <a href="articles/${article.id}.html">
                            <span class="title">${article.title}</span>
                            <span class="date">${article.date}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// ==================== 渲染标签云 ====================
function renderTags() {
    const container = document.getElementById('tags-cloud');
    if (!container) return;

    // 统计标签
    const tagCounts = {};
    articles.forEach(article => {
        article.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    // 渲染标签
    container.innerHTML = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count]) => `
            <a href="?tag=${tag}" class="tag-item" onclick="filterByTag('${tag}'); return false;">
                ${tag}<span class="count">${count}</span>
            </a>
        `).join('');
}

// ==================== 标签筛选 ====================
function filterByTag(tag) {
    if (window.location.search.includes('tag=')) {
        const url = new URL(window.location);
        url.searchParams.set('tag', tag);
        window.location.href = url.toString();
    } else {
        renderArticles(tag);
    }
}

// ==================== 搜索功能 ====================
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const results = articles.filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query)
        );
        renderArticles();
        
        // 高亮搜索结果（简单实现）
        if (query) {
            const cards = document.querySelectorAll('.article-card');
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                if (!title.includes(query)) {
                    card.style.display = 'none';
                }
            });
        }
    });
}

// ==================== 页面初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 设置当前页面导航高亮
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 初始化各页面功能
    if (document.getElementById('articles-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const tag = urlParams.get('tag');
        renderArticles(tag || 'all');
    }

    if (document.getElementById('archive-content')) {
        renderArchive();
    }

    if (document.getElementById('tags-cloud')) {
        renderTags();
    }

    if (document.getElementById('search-input')) {
        initSearch();
    }
});

// ==================== 平滑滚动 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});