// ==================== 文章数据 ====================
const articles = [
    {
        id: 1,
        title: '植发文案这样写，转化率提升 14 倍',
        excerpt: '从 ROI 0.25 到 3.5，我总结了一套植发文案的转化公式。分享医美内容运营的实战经验，包括金字塔结构、营销转化标准和转化内容审核六问。',
        date: '2026-03-06',
        tags: ['医美运营', '内容营销', '转化率'],
        category: '运营干货',
        author: 'Darwin788',
        readTime: '8 分钟'
    },
    {
        id: 2,
        title: '小红书医生 KOS 账号运营指南',
        excerpt: '医生如何在小红书打造个人 IP？这份运营指南包含内容策略、选题方向和变现路径。详解医美行业 KOS 账号的定位方法、内容矩阵和转化技巧。',
        date: '2026-03-05',
        tags: ['小红书', 'KOS', '医生IP'],
        category: '平台运营',
        author: 'Darwin788',
        readTime: '10 分钟'
    },
    {
        id: 3,
        title: '卖点 vs 买点：医美文案的底层逻辑',
        excerpt: '用户不关心你能做什么，只关心他能得到什么。本文深入解析卖点与买点的转换方法，通过实际案例展示如何将技术语言转化为用户收益。',
        date: '2026-03-04',
        tags: ['文案写作', '用户心理', '医美'],
        category: '文案技巧',
        author: 'Darwin788',
        readTime: '6 分钟'
    },
    {
        id: 4,
        title: '如何用 OpenClaw 搭建智能助手',
        excerpt: '使用 OpenClaw 框架快速构建个性化 AI 助手，实现自动化工作流和智能内容创作。从环境配置到技能开发，手把手教你搭建专属助手。',
        date: '2026-03-03',
        tags: ['AI', 'OpenClaw', '自动化'],
        category: '技术实践',
        author: 'Darwin788',
        readTime: '12 分钟'
    },
    {
        id: 5,
        title: '植发美学：颞角、头顶、鬓角的设计要点',
        excerpt: '植发不只是降低发际线，颞角、头顶、鬓角三个位置才是颜值的分水岭。专业医生为你解析面部美学与植发设计的关系。',
        date: '2026-03-02',
        tags: ['植发', '医美', '美学设计'],
        category: '专业知识',
        author: 'Darwin788',
        readTime: '7 分钟'
    },
    {
        id: 6,
        title: '内容营销 ROI 优化：从 0.25 到 3.5 的实战复盘',
        excerpt: '医美内容营销如何从亏损到盈利？复盘一个真实案例，分享 ROI 优化的关键节点和决策逻辑。',
        date: '2026-03-01',
        tags: ['ROI', '内容营销', '数据分析'],
        category: '运营干货',
        author: 'Darwin788',
        readTime: '15 分钟'
    },
    {
        id: 7,
        title: '发际线设计指南：脸型与发际线的完美搭配',
        excerpt: '发际线不是越低越好，不同脸型适合不同的发际线。本文详解圆形、方形、长形、心形脸的发际线设计要点。',
        date: '2026-02-28',
        tags: ['植发', '美学设计', '脸型'],
        category: '专业知识',
        author: 'Darwin788',
        readTime: '6 分钟'
    },
    {
        id: 8,
        title: '植发手术全流程详解',
        excerpt: '从咨询到恢复，植发手术全流程完整拆解。包含术前准备、手术当天、术后护理各阶段的注意事项。',
        date: '2026-02-27',
        tags: ['植发', '手术', '护理'],
        category: '专业知识',
        author: 'Darwin788',
        readTime: '8 分钟'
    },
    {
        id: 9,
        title: '小红书爆款标题的 5 个公式',
        excerpt: '小红书用户 0.5 秒决定是否点击，标题决定了 80% 的流量。本文分享 5 个经过验证的爆款标题公式。',
        date: '2026-02-26',
        tags: ['小红书', '文案写作', '流量'],
        category: '文案技巧',
        author: 'Darwin788',
        readTime: '6 分钟'
    },
    {
        id: 10,
        title: '医美私域运营：从公域到私域的全链路',
        excerpt: '公域获客成本越来越高，私域运营成为医美机构的必备能力。详解从加微到成交的完整私域运营策略。',
        date: '2026-02-25',
        tags: ['私域', '运营', '转化'],
        category: '运营干货',
        author: 'Darwin788',
        readTime: '12 分钟'
    },
    {
        id: 11,
        title: '植发技术演进史：从 FUT 到不剃发植发',
        excerpt: '植发技术经历了怎样的演进？FUT、FUE、不剃发植发、微针植发各有优缺点，一文讲清楚该怎么选。',
        date: '2026-02-24',
        tags: ['植发', '技术', '手术'],
        category: '专业知识',
        author: 'Darwin788',
        readTime: '10 分钟'
    },
    {
        id: 12,
        title: '医美咨询师必备话术手册',
        excerpt: '医美咨询师如何成交流程？本文整理常见场景的话术模板，包括初诊接待、需求挖掘、方案推荐、价格谈判、售后维护。',
        date: '2026-02-23',
        tags: ['医美', '销售', '话术'],
        category: '运营干货',
        author: 'Darwin788',
        readTime: '15 分钟'
    }
];

// ==================== 标签统计 ====================
const tagCounts = {};
articles.forEach(article => {
    article.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
});

// ==================== 项目数据 ====================
const projects = [
    {
        id: 1,
        name: '简历网站',
        description: '个人简历网站，包含两个版本：现代科技风（蓝紫渐变）和复古印刷风（棕色系）。',
        tech: ['HTML', 'CSS', 'GitHub Pages'],
        link: 'https://darwin788.github.io/resume/',
        link2: 'https://darwin788.github.io/resume-brown/'
    },
    {
        id: 2,
        name: '小红书内容体系',
        description: '植发/医美 IP 文案方法论，转化率优化策略，ROI 提升实战经验分享。',
        tech: ['内容运营', 'KOL/KOS', '小红书']
    },
    {
        id: 3,
        name: 'AI 助手开发',
        description: '基于 OpenClaw 框架的智能助手开发，实现自动化工作流和智能内容创作。',
        tech: ['OpenClaw', 'Node.js', 'AI Automation']
    },
    {
        id: 4,
        name: '医美内容矩阵',
        description: '医美行业内容营销方法论，包括选题库、内容模板、转化漏斗等完整体系。',
        tech: ['内容运营', '用户增长', '转化优化']
    }
];
