module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/note',
  head: [
    ['link', { rel: 'icon', href: '/logo.gif' }],
    ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
  ],
  // lastUpdated: 'Last Updated', // 显示更新时间
  markdown: {
    lineNumbers: true, // 代码显示行号
    // markdown-it-anchor 的选项
    // anchor: { permalink: false },
    // // markdown-it-toc 的选项
    // toc: { includeLevel: [1, 2] },
    // config: md => {
    //   // 使用更多 markdown-it 插件！
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  themeConfig: {
    logo: "/icon.png", // 导航栏左边logo,不写就不显示
    nav: require('./nav'),
    sidebar: [
      {
        title: 'JavaScript',
        collapsable: true, //是否展开
      },
      // ['js/event-loop.md', 'Event-Loop'],
      // ['./guide/started/started', '快速上手'],
      {
        title: 'Css',
        collapsable: false
      },
      // ['./guide/icon/icon', 'icon']
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // 显示更新时间
    searchMaxSuggestoins: 10,
    displayAllHeaders: true,
    serviceWorker: {
      updatePopup: true,
      // updatePopup: {
      //   message: "New content is available.",
      //   buttonText: 'Refresh'
      // }
    },
    // 假定 GitHub。也可以是一个完整的 GitLab URL。
    repo: 'https://github.com/WGinit/Front-end-notes.git'
  },
  plugins: [
    // 'axios'  // 配置插件
  ]
}