<template>
  <section class="teacher-promo-section">
    <h3 class="section-title">지금 주목할 선생님 기획전</h3>
    <div class="grid">
      <TeacherPromoCard v-for="(card, i) in promoList" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script>
import axios from "@/libs/axios";
import TeacherPromoCard from "./TeacherPromoCard.vue";

export default {
  components: { TeacherPromoCard },
  data() {
    return {
      promoList: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("/api/promo-list");
      this.promoList = res.data;
    } catch (error) {
      console.error("메인 지금 주목할 선생님 기획전 데이터를 불러오지 못했습니다", error);
    }
  },
};
</script>

<style scoped>
.teacher-promo-section {
  /* margin-top: 60px; */
  padding: 0 20px;
  width: 790px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
