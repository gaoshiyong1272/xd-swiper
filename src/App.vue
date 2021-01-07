<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <xd-qiniu-editor
      action="https://up-z1.qiniup.com"
      :height="400"
      :qiniu-options="qiniuOptions"
      :z-index="10000"
      v-model="qiniuContent"
    ></xd-qiniu-editor>

    <xd-editor
      style="width: 70%"
      action="https://sandbox-c.jufubao.cn/api/admin/common/upload"
      :params="params"
      :headers="{}"
      :height="100"
      :z-index="10000"
      :upload-type="['jpeg','jpg','png', 'gif', 'bmp']"
      :size="0.1"
      :insert-img-fn="insertImage"
      v-model="customContent"
    ></xd-editor>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import editer from 'gxds-editer';
let {XdEditor, XdQiniuEditor} = editer;

export default {
  name: 'app',
  components: {
    HelloWorld,
    XdEditor,
    XdQiniuEditor
  },
  data() {
    return {
      qiniuContent: '<p>测试数据</p>',
      qiniuOptions: {
        accoutKey: 'bP3Ca5dtSJBNaWwMkihfhuE30CbAZnYrNzQm6eMN', //七牛AK
        serviceKey: 'pPNgWwRL3_Jlj7cPtpYbkhXn01EOZTtUhOs3NqZM', //七牛SK
        webSiteName: 'e56buystatic', //七牛桶名称
        staticUrl: 'http://static.e56buy.com' //静态域名访问地址
      },
      //自定义文件上传
      customContent: '<p>自定义图片上传测试数据</p>',
      params: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FuZGJveC1jLmp1ZnViYW8uY24iLCJpYXQiOjE2MDc0NDMzMTcsImV4cCI6MTYwNzUyOTcxNywiYWNjb3VudF9pZCI6MSwibWVyY2hhbnRfaWQiOjE2MSwiaXAiOiIyNy4xODkuMjI4LjE0IiwiY2hlY2tzdW0iOiI5MjBhZTliNDcxNTczZjk3ZTEwNDAwMTZjYTIwMTZhZiJ9.3XnNYTZIBFFRi6f5gbOBbeTXWQUBIUSkFO053VptuL0'
      }
    };
  },
  created(){
    console.log(editer)
  },

  methods: {
    insertImage(callback, result) {
      callback(result.data['ObjectURL'])
    },
  }
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
