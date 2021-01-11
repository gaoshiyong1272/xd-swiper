<template>
  <div id="app">
    <xd-swiper
      :list="list"
      :height="300"
      :width="600"
      :autoplay="5000"
      :next-prve-button="true"
      :pagination-pos="10"
      pagination-custom-css="custom"
      pagination-type="number"
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
        list: [
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
