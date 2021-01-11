<template>
  <div :class="`xd-thumb-swiper ${customCss}`" :style="`width: ${width}px; height:${height}px; background: ${bg}; position: relative;`">
    <div class="swiper-container gallery-top" :style="`border: ${border}`">
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
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div
          v-for="(item,index) in dataList"
          :key="index"
          class="swiper-slide"
          :style="`background-image:url(${item.image});border: ${border}`"></div>
      </div>
    </div>
    <div v-if="nextPrveButton" class="swiper-button-next swiper-button-black"></div>
    <div v-if="nextPrveButton" class="swiper-button-prev swiper-button-black"></div>
  </div>
</template>

<script>
  export default {
    name: "XdThumbSwiper",
    props: {
      list: {
        type: Array,
        required: true
      },

      bg:{
        type: String,
        default: '#f8f8f8'
      },

      border: {
        type: String,
        default: '1px solid #4285F4'
      },

      /***
       * @description 定义翻页器样式名称
       */
      customCss: {
        type: String,
        default: '',
      },

      animation: {
        type: String,
        default: 'slide',
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
      jsStatus(val) {
        if (val && this.cssStatus) {
          this.init()
        }
      },

      cssStatus(val) {
        if (val && this.jsStatus) {
          this.init()
        }
      },
    },
    data() {
      return {
        eleId: null, //id
        api: 'https://lib.baomitu.com/Swiper/5.4.5/js/swiper.min.js',
        css: 'https://lib.baomitu.com/Swiper/5.4.5/css/swiper.min.css',
        jsStatus: false,
        cssStatus: false,
        dataList: [],
        animationArray: ['cube', 'fade', 'coverflow', 'flip', 'slide'],
      }
    },
    created() {
      this.dataList = this.list;
      this.eleId = `xd-swiper-${this.$swiperHelper.random(1000000, 9999999)}`;
      //加载js库
      this.$swiperHelper.loadFile(this.api)
        .then(res => {
          console.log('loadFile', res);
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
    methods: {
      init() {
        let galleryThumbs = new window['Swiper']('.gallery-thumbs', {
          spaceBetween: 10,
          slidesPerView: 4,
          loop: true,
          freeMode: false,
          loopedSlides: 5, //looped slides should be the same
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });

        let options = {
          spaceBetween: 10,
          effect: this.$swiperHelper.inArray(this.animationArray,[this.animation]) ?
            this.animation: 'slide', //cube,fade,coverflow,flip,slide
          thumbs: {
            swiper: galleryThumbs,
          },
        };

        if(this.autoplay>0) {
          options['autoplay'] = {
            delay: this.autoplay,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        }else{
          options['autoplay'] = false;
        }

        if(this.nextPrveButton) {
          options['navigation'] = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          };
        }
        new window['Swiper']('.gallery-top', options);
      },
    }

  }
</script>

<style scoped>
  .xd-thumb-swiper {
    position: relative;
  }
  .gallery-top {
    width: 100%;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-wrapper {
    box-sizing: border-box;
  }

  .gallery-thumbs {}

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

  .gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
    margin: 0 45px;

  }

  .gallery-thumbs .swiper-slide {
    height: 100%;
    opacity: 0.4;
    box-sizing: border-box;
  }

  .gallery-thumbs .swiper-slide-thumb-active {
    opacity: 1;
  }

  /deep/ .gallery-thumbs .swiper-slide-thumb-active {
  }

  .swiper-button-black {
    top: 90%;
    color: #D2D2D2;
    font-size: 20px;
    outline: none;
  }

  .swiper-button-black:after {
    font-size: 30px!important;
  }


</style>
