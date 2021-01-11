<template>
  <div style="height: 400px; width: 600px; background: #ccc">
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(http://testimg.tiangongy.com/FhEb9W7wSyxqJGkvmk3IS_L74okx)"></div>
        <div class="swiper-slide" style="background-image:url(http://testimg.tiangongy.com/FtjhbBgx-pOvd1_IV-8RrMiwSDf_)"></div>
        <div class="swiper-slide" style="background-image:url(http://testimg.tiangongy.com/Fl5EQhAw91Ie3E7Pd_qt_bJnSGag)"></div>
        <div class="swiper-slide"
             style="background-image:url(http://testimg.tiangongy.com/FhEb9W7wSyxqJGkvmk3IS_L74okx)"></div>
        <div class="swiper-slide"
             style="background-image:url(http://testimg.tiangongy.com/FtjhbBgx-pOvd1_IV-8RrMiwSDf_)"></div>
        <div class="swiper-slide"
             style="background-image:url(http://testimg.tiangongy.com/Fl5EQhAw91Ie3E7Pd_qt_bJnSGag)"></div>
        <div class="swiper-slide"
             style="background-image:url(http://testimg.tiangongy.com/FhEb9W7wSyxqJGkvmk3IS_L74okx)"></div>
        <div class="swiper-slide"
             style="background-image:url(http://testimg.tiangongy.com/FtjhbBgx-pOvd1_IV-8RrMiwSDf_)"></div>
        <div class="swiper-slide"
             style="background-image:url(http://testimg.tiangongy.com/Fl5EQhAw91Ie3E7Pd_qt_bJnSGag)"></div>
      </div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>

</template>

<script>
  export default {
    name: "XdThumbSwiper",
    props:{

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
        api: 'https://lib.baomitu.com/Swiper/3.4.2/js/swiper.min.js',
        css: 'https://lib.baomitu.com/Swiper/3.4.2/css/swiper.min.css?v=' + new Date().getTime(),
        jsStatus: false,
        cssStatus: false,
      }
    },

    created(){
      this.$swiperHelper.loadFile(this.api)
        .then(res=> {
          console.log('loadFile',res);
          this.jsStatus = true;
        })
        .catch()

      this.$swiperHelper.loadFile(this.css, 'css')
        .then(res => {
          console.log('loadFilecss', res);
          this.cssStatus = true;
        })
        .catch()
    },

    methods:{
      init(){
        console.log('done');
        var galleryTop = new Swiper('.gallery-top', {
          loop:true,
          spaceBetween: 10,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        });
      }
    }

  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

</style>
