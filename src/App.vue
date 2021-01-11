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
        height: 300, //轮播图高度
        width: 600, //轮播图宽度
        autoplay: 5000, //轮播图自动轮播毫秒,0=>不轮播
        nextPrveButton: true, //显示左右上一张和下一张按钮
        paginationPos: 10, //分页器距离底部像素
        paginationType: 'dot', //分页器样式 dot=>点 number=>数字 block=>方块显示
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
