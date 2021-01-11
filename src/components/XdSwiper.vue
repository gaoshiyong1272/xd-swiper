<template>
  <div :style="`height: ${height}px; width: ${width}px; background: #ccc`">
    <div class="swiper-container" v-if="eleId" :id="eleId">
      <div class="swiper-wrapper">
        <div
          v-for="(item,index) in dataList"
          :key="index"
          class="swiper-slide"
          :style="`background-image:url(${item.image})`">
          <slot :item="item" :index="index">
            <a v-if="item.url" :href="item.url" target="_blank"></a>
          </slot>
        </div>
      </div>
      <div :style="`bottom: ${paginationPos}px;`" :class="`swiper-pagination ${paginationCustomCss ? paginationCustomCss: '' }`"></div>
      <div v-if="nextPrveButton" class="swiper-button-next swiper-button-white"></div>
      <div v-if="nextPrveButton" class="swiper-button-prev swiper-button-white"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "XdSwiper",
    props:{
      list: {
        type:Array,
        required: true
      },
      paginationType: {
        type: String,
        default: 'block' //dot=>点 number=>数字 block=>方块显示
      },

      /**
       * @description 分页器位置
       */
      paginationPos:{
        type: Number,
        default: 10
      },

      /***
       * @description 定义翻页器样式名称
       */
      paginationCustomCss:{
        type: String,
        default:'custom',
      },

      width: {
        type: Number,
        default: 600
      },
      height: {
        type: Number,
        default: 300
      },
      /**
       * @description 自动播放毫秒 0=>不轮播
       */
      autoplay: {
        type: Number,
        default: 0
      },

      /**
       * @description 显示左右切换按钮
       */
      nextPrveButton: {
        type: Boolean,
        default: true
      }

    },
    watch: {
      jsStatus(val){
        if(val && this.cssStatus) {
          this.init()
        }
      },

      cssStatus(val) {
        if (val && this.jsStatus) {
          this.init()
        }
      },
    },
    data(){
      return {
        eleId: null, //id
        api: 'https://lib.baomitu.com/Swiper/3.4.2/js/swiper.min.js',
        css: 'https://lib.baomitu.com/Swiper/3.4.2/css/swiper.min.css',
        jsStatus: false,
        cssStatus: false,
        dataList: []
      }
    },
    created(){
      this.dataList = this.list;
      this.eleId = `xd-swiper-${this.$swiperHelper.random(1000000,9999999)}`;
      //加载js库
      this.$swiperHelper.loadFile(this.api)
        .then(res=> {
          console.log('loadFile',res);
          this.jsStatus = true;
        })
        .catch();
      //加载css
      this.$swiperHelper.loadFile(this.css, 'css')
        .then(res => {
          console.log('loadFilecss', res);
          this.cssStatus = true;
        })
        .catch()
    },
    methods:{
      init(){
        let options = {
          spaceBetween: 10,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender: (swiper, index, className)=> {
            let html = `<span class="${className}"></span>`;
            if(this.paginationType === 'number') {
              html = `<span class="${className} pagination-number">${index + 1}</span>`;
            }
            if(this.paginationType === 'block'){
              html = `<span class="${className} pagination-block"></span>`;
            }
            return html;
          }
        };

        if(this.autoplay) {
          options['autoplay'] = this.autoplay;
          options['loop'] = true;
        }

        if(this.nextPrveButton) {
          options['nextButton'] = '.swiper-button-next';
          options['prevButton'] = '.swiper-button-prev';
        }

        new window['Swiper'](`#${this.eleId}`, options);
      },
    }

  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  .swiper-slide a {
    display: block;
    width: 100%;
    height: 100%;
  }

  /deep/ .pagination-number {
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    opacity: 0.7;
  }

  /deep/ .pagination-number.swiper-pagination-bullet-active {
    font-weight: bold;
    color: #fff;
    opacity: 1;
  }

  /deep/ .pagination-block {
    display: inline-block;
    width: 35px;
    height: 4px;
    opacity: 0.5;
    overflow: hidden;
    border-radius: 0;
  }

  /deep/ .pagination-block.swiper-pagination-bullet-active {
    font-weight: bold;
    color: #fff;
    opacity: 1;
  }

</style>
