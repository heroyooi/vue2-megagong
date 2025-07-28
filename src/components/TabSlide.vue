<template>
  <swiper ref="mySwiper" :options="swiperOption" class="swiper-container">
    <swiper-slide v-for="(item, i) in slides" :key="i" class="teacher-slide">
      <div class="teacher-box">
        <img :src="item.img" :alt="item.alt" />
        <p class="teacher-name">{{ item.alt }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
        },
        loop: false,
      },
    };
  },
  watch: {
    slides() {
      this.$nextTick(() => {
        const swiper = this.$refs.mySwiper?.swiper;
        if (swiper) {
          swiper.update();
          swiper.slideTo(0);
        }
      });
    },
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  overflow: hidden;
}

.swiper-slide {
  /* width: auto !important; */
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}

.teacher-box {
  width: 100%;
  max-width: 200px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}

.teacher-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.teacher-box img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.teacher-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
</style>
