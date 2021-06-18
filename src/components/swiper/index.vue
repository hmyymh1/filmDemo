<template>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in sonlist">
          <slot :item=item></slot>
      </swiper-slide>
    </swiper>
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';


    import 'swiper/swiper.scss';
    export default {
        name : 'swiper-container',

        props : {
            sonlist:{
                type: Array,
            },
        },

        components: {
          Swiper,
          SwiperSlide,
        },

        methods: {
          onSwiper(swiper) {
            //console.log(swiper);
          },
          onSlideChange() {
            //console.log('slide change');
          },
        },

    };
  </script>