## 安装过程
1.首先是创建目录

```shell
  mkdir vitepress-program
  cd vitepress-program
```
2.初始化package.json，并安装vitepress
```shell
  npm init
  npm i -D vitepress
```
3.添加脚本
```js
  "scripts": {
    "dev": "vitepress dev docs --open",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs"
  }
```
4.更目录下创建 docs 文件夹，并创建一个md文件
```shell
  mkdir docs
  echo '# Hello World' > docs/index.md
```
5.启动项目
```shell
  npm run dev
```
## 简单配置
可以配置侧边栏和导航栏。在docs中新建一个.vitepress文件夹，里面创建一个config.js文件
```js
  // vitepress/config.js
module.exports = {
    title: "wuq's Blog",// 网站标题
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
                href: '/img/linktolink.png',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about/' },
        ],
        //   侧边导航
        sidebar: [
            { text: '我的', link: '/mine/' }
        ]
    }
}
```