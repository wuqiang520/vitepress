module.exports = {
  markdown: {
    lineNumbers: true,
  },
  title: "我的文档", // 网站标题
  description: '我的vitepress博客.', //网站描述
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  repo: 'vuejs/vitepress',
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/img/zhs.jpg', //图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    //   头部导航
    nav: [{
        text: '指南',
        link: '/'
      },
      {
        text: '关于',
        link: '/about/'
      },
    ],
    //   侧边导航
    sidebar: [{
        text: 'vitepress安装及配置',
        link: '/mine/'
      },
      {
        text: 'doc1',
        link: '/doc1/'
      }
    ]
  }
}