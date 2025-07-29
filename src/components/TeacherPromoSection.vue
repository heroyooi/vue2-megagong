<template>
  <section class="teacher-promo-section">
    <h3 class="section-title">지금 주목할 선생님 기획전</h3>
    <div class="grid">
      <TeacherPromoCard v-for="(card, i) in promoList" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import TeacherPromoCard from "./TeacherPromoCard.vue";

export default {
  components: { TeacherPromoCard },
  data() {
    return {
      promoList: [],
    };
  },
  created() {
    axios.get("http://localhost:4000/api/promo-list").then((res) => {
      this.promoList = res.data;
    });
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
