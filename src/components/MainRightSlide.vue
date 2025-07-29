<template>
  <div class="right-slide-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(group, idx) in cardGroups" :key="idx">
        <div class="right-section">
          <RightCard
            v-for="(item, i) in group"
            :key="i"
            :img="item.img"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import RightCard from "./RightCard.vue";

export default {
  components: { RightCard },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className}"></span>`;
          },
        },
      },
      items: [
        {
          img: "https://files.megagong.net/board_data/banner/main/97372942848_20250718175514.png",
          title: "2026 커리큘럼 안내",
          description: "전범위 탄탄한 개념이해와 \n추론훈련으로 고득점 완성",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/111851706690_20250711084722.png",
          title: "2026 행정학 커리큘럼",
          description: "전범위 탄탄한 개념이해와 \n추론훈련으로 고득점 완성",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/60393398016_20250623113547.png",
          title: "7-8월 업데이트 강좌",
          description: "최신 커리큘럼 반영!",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/97372942848_20250718175514.png",
          title: "2026 커리큘럼 안내2",
          description: "전범위 탄탄한 개념이해와 \n추론훈련으로 고득점 완성",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/111851706690_20250711084722.png",
          title: "2026 행정학 커리큘럼2",
          description: "전범위 탄탄한 개념이해와 \n추론훈련으로 고득점 완성",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/60393398016_20250623113547.png",
          title: "7-8월 업데이트 강좌2",
          description: "최신 커리큘럼 반영!",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/97372942848_20250718175514.png",
          title: "2026 커리큘럼 안내3",
          description: "전범위 탄탄한 개념이해와 \n추론훈련으로 고득점 완성",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/111851706690_20250711084722.png",
          title: "2026 행정학 커리큘럼3",
          description: "전범위 탄탄한 개념이해와 \n추론훈련으로 고득점 완성",
        },
        {
          img: "https://files.megagong.net/board_data/banner/main/60393398016_20250623113547.png",
          title: "7-8월 업데이트 강좌3",
          description: "최신 커리큘럼 반영!",
        },
      ],
    };
  },
  computed: {
    cardGroups() {
      const groupSize = 3;
      const groups = [];
      for (let i = 0; i < this.items.length; i += groupSize) {
        groups.push(this.items.slice(i, i + groupSize));
      }
      return groups;
    },
  },
};
</script>

<style scoped>
.right-slide-wrapper {
  width: 100%;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 20px;
}

.right-section {
  display: flex;
  flex-direction: column;
}

.swiper-pagination {
  display: flex;
  justify-content: center;
  bottom: 0 !important;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #ddd;
  border-radius: 50%;
  transition: all 0.3s;
}

.swiper-pagination-bullet-active {
  width: 24px;
  height: 8px;
  background-color: #000;
  border-radius: 10px;
}
</style>
