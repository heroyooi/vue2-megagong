<template>
  <div class="main-slide">
    <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide v-for="(item, i) in slides" :key="i">
        <img :src="item.img" :alt="item.alt" class="slide-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import axios from "@/libs/axios";

export default {
  name: "MainSlide",
  data() {
    return {
      // slides: [
      //   { img: "https://img.megagong.net/m/2025/0724_pass/gong/pass_gong.png", alt: "배너1" },
      //   { img: "https://img.megagong.net/m/2025/0724_pass/tech/pass_tech.png", alt: "배너2" },
      //   { img: "https://img.megagong.net/m/2025/0724_pass/army/pass_army.png", alt: "배너3" },
      // ],
      slides: [],
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
  async created() {
    try {
      const res = await axios.get("/api/main-slides");
      this.slides = res.data;
    } catch (error) {
      console.error("메인 슬라이드 데이터를 불러오지 못했습니다", error);
    }
  },
};
</script>

<style>
.main-slide {
  width: 790px;
}
</style>
