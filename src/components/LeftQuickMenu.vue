<template>
  <div class="left-quickmenu">
    <!-- ✅ 상단 1타 배너 슬라이드 -->
    <swiper :options="topSwiperOption" class="tea-swiper">
      <swiper-slide v-for="(banner, index) in teaItems" :key="index">
        <div class="quick-banner teacher-banner">
          <img :src="banner.img" alt="상단 배너" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination top-pagination" slot="pagination"></div>
    </swiper>

    <!-- ✅ 가운데 메가폰 -->
    <div class="quick-banner megaphone-banner">
      <img src="https://img.megagong.net/m/2025/0703_notice/bn_left_sky.png" alt="megaphone" />
    </div>

    <!-- ✅ 하단 OX 퀴즈 - Swiper -->
    <swiper :options="quizSwiperOption" class="ox-swiper">
      <swiper-slide v-for="(quiz, index) in quizItems" :key="index">
        <div class="quick-banner quiz-banner">
          <img :src="quiz.img" alt="퀴즈 배너" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination ox-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";

export default {
  name: "LeftQuickMenu",
  data() {
    return {
      teaItems: [
        {
          img: "https://img.megagong.net/m/2025/0710_allawyer/left_sky_bn_gong.png",
        },
        {
          img: "https://img.megagong.net/m/2025/0714_tjenglish08/con_img31.png",
        },
      ],
      quizItems: [
        {
          img: "https://img.megagong.net/m/2025/0625_next/side_left_1_4.png",
        },
        {
          img: "https://img.megagong.net/m/2025/0512_main/side_left_1_2.png",
        },
      ],
      topSwiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".top-pagination",
          clickable: true,
        },
      },
      quizSwiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".ox-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.left-quickmenu {
  position: absolute;
  top: 40px;
  right: 50%;
  margin-right: 630px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 106px;
  z-index: 99;
}

.quick-banner {
  width: 100%;

  img {
    width: 100%;
    border-radius: 12px;
  }

  .text {
    font-size: 12px;
    color: #222;
    line-height: 1.4;

    strong {
      font-weight: bold;
      color: #0070f3;
    }
  }
}

.tea-swiper,
.ox-swiper {
  width: 106px;
}
</style>
