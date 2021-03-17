# Bookrest

本项目为由HEXO驱动的Fluid主题的基于GitHub pages实现的个人博客。

个性域名为：bookrest.top

注册在万网（阿里云）并由cloudflare进行CDN分发

## 自定义

拒绝渲染README.md，`_config.yml`中`skip_render: README.md`

访问统计-不蒜子，[busuanzi](http://busuanzi.ibruce.info/)

超大型友链-[萌国ICP备案](https://icp.gov.moe)

运行时长记录-[Fluid 页脚增加网站运行时长](https://hexo.fluid-dev.com/posts/fluid-footer-custom/)

一言功能-[为您的Hexo博客添加Hitokoto一言功能](https://blog.bill.moe/add-hitokoto/)，根据[一言开发者中心-语句接口文档](https://pa-1251215871.cos-website.ap-chengdu.myqcloud.com/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80)，增添跳转链接。

## 插件

hexo-fontawesome

因为不熟悉Fluid主题中提供的主题图标，加上一些功能要求fa，因此改用font awesome 

hexo-markmap

[hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier)

hexo-generator-index，置顶。在文章开头 [Front-matter (opens new window)](https://hexo.io/zh-cn/docs/front-matter)中配置 `sticky` 属性。数值越大，该文章越靠前，达到类似于置顶的效果，其他未设置的文章依然按默认排序。