<template>
  <div class="main-slide">
    <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide v-for="(item, i) in mainSlides" :key="i">
        <img :src="item.img" :alt="item.alt" class="slide-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "MainSlide",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapState('main', ['mainSlides']),
  },
  created() {
    this.fetchMainSlides();
  },
  methods: {
    ...mapActions('main', ['fetchMainSlides']),
  },
};
</script>

<style>
.main-slide {
  width: 790px;
}
</style>
