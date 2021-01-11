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
``` text
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

#### 基础使用方式
```vue
<template>
  <div id="app">
    <xd-swiper
      :list="list"
      :height="height"
      :width="width"
      :autoplay="autoplay"
      :next-prve-button="nextPrveButton"
      :pagination-pos="paginationPos"
      :pagination-custom-css="paginationCustomCss"
      :pagination-type="paginationType"
    >
      <template slot-scope="{item}">
        {{item}}
      </template>
    </xd-swiper>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {},
    data() {
      return {
        height: 300, //轮播图高度，默认300
        width: 600, //轮播图宽度，默认600
        autoplay: 5000, //轮播图自动轮播毫秒,默认0=>不轮播
        nextPrveButton: true, //显示左右上一张和下一张按钮
        paginationPos: 10, //分页器距离底部像素 默认10px
        paginationType: 'dot', //分页器样式 默认dot=>点， number=>数字 block=>方块显示
        paginationCustomCss: '', //分页器自定义样式名称
        list: [//列表图片
          {image: 'http://testimg.tiangongy.com/FhEb9W7wSyxqJGkvmk3IS_L74okx', url: 'https://fanyi.baidu.com/'},
          {image: 'http://testimg.tiangongy.com/FtjhbBgx-pOvd1_IV-8RrMiwSDf_', url: 'https://fanyi.baidu.com/'},
          {image: 'http://testimg.tiangongy.com/Fl5EQhAw91Ie3E7Pd_qt_bJnSGag', url: 'https://fanyi.baidu.com/'},
          {image: 'http://testimg.tiangongy.com/Fnl4Prfu_UwKVfqGc2qYjpp6CY8p', url: 'https://fanyi.baidu.com/'},
          {image: 'http://testimg.tiangongy.com/Fjc7TZ1cusZHvJmESva7dCHphu6V', url: 'https://fanyi.baidu.com/'}
        ]
      };
    },
    created() {

    },

    methods: {}
  }
</script>
<style>

</style>
```

#### 缩略图使用方式






