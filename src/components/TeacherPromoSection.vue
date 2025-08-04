<template>
  <section class="teacher-promo-section">
    <h3 class="section-title">지금 주목할 선생님 기획전</h3>
    <div class="grid">
      <TeacherPromoCard v-for="(card, i) in promoList" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TeacherPromoCard from "./TeacherPromoCard.vue";

export default {
  components: { TeacherPromoCard },
  computed: {
    ...mapState('main', ['promoList']),
  },
  created() {
    this.fetchPromoList();
  },
  methods: {
    ...mapActions('main', ['fetchPromoList']),
  },
};
</script>

<style scoped>
.teacher-promo-section {
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
