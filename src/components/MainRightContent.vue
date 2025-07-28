<template>
  <div class="right-section">
    <RightCard
      v-for="(item, i) in items"
      :key="i"
      :img="item.img"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script>
import RightCard from "./RightCard.vue";

export default {
  components: { RightCard },
  data() {
    return {
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
      ],
    };
  },
};
</script>

<style scoped>
.right-section {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 20px;
}
</style>
