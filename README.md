# Gxd-swiper

#### 介绍
vue 简化swiper的使用, 常用几种模式，参考网址： https://www.swiper.com.cn/

#### 项目下载与初始化

```bash
# 克隆项目
git clone git@github.com:gaoshiyong1272/xd-swiper.git

# 进入项目目录
cd xd-swiper

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --save --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev

```

#### 预览
```markdown
![demo](http://static.e56buy.com/1610238353869.jpg "demo")
```

#### 安装
```bash
npm i gxd-swiper --save --registry  https://registry.npm.taobao.org
```

#### 插件引用
``` javascript

//初始化自定义插件

1.全局引用
import vueSwiper from 'gxd-swiper';
Vue.use(vueSwiper);

2.局部引用
import vueSwiper from 'gxd-swiper';
let {XdEditor, XdQiniuEditor} = vueSwiper;

export default {
    ...
    components: {
        XdSwiper,
        XdThumbSwiper
    }
    ...
}
```




