const _nav = require('./nav')
const _sidebar = require('./sidebar')

module.exports = {
  title: '白山羊笔记',
  description: '记录日常开发笔记',
  base: '/note/',
  port: '',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}]
  ],
  markdown: {
    lineNumbers: false, // 代码显示行号
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
    logo: "/logo.png", // 导航栏左边logo,不写就不显示
    nav: _nav,
    sidebar: _sidebar,
    sidebarDepth: 1,
    lastUpdated: '最近更新', // 显示更新时间
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
