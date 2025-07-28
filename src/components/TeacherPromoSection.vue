<template>
  <section class="teacher-promo-section">
    <h3 class="section-title">지금 주목할 선생님 기획전</h3>
    <div class="grid">
      <TeacherPromoCard v-for="(card, i) in promoList" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script>
import TeacherPromoCard from "./TeacherPromoCard.vue";

export default {
  components: { TeacherPromoCard },
  data() {
    return {
      promoList: [
        {
          title: "흐름은 새롭게, 본질은 그대로\n2026 전효진 커리큘럼",
          description: "흐름은 새롭게, 본질은 그대로\n2026 전효진 커리큘럼",
          name: "전효진",
          subject: "행정법",
          img: "https://img.megagong.net/profphoto/gong/wjsgywls1/main_intro2.png",
        },
        {
          title: "간호직 최신 이슈 총정리\nNEW 월간 송아름",
          description: "최신 이슈를 보면 시험문제가 보입니다.",
          name: "송아름",
          subject: "지역사회간호",
          img: "https://img.megagong.net/profphoto/gong/megapassnurse/main_intro2.png",
        },
        {
          title: "2026 박상민\n형사정책 개념 완성",
          description: "더 견고하게 만든 심화완성",
          name: "박상민",
          subject: "형사정책",
          img: "https://img.megagong.net/profphoto/gong/p3672303/main_intro2.png",
        },
        {
          title: "경선식 공무원 영단어\n초스피드 암기비법",
          description: "시험에 맞는 어휘들 다시 태어났다!",
          name: "경선식",
          subject: "영어",
          img: "https://img.megagong.net/profphoto/gong/incredvoc/main_intro2.png",
        },
        {
          title: "VocaGram 하프모고\n박수연 영어",
          description: "하프 모의고사로 문제풀이 집중력 UP",
          name: "박수연",
          subject: "영어",
          img: "https://img.megagong.net/profphoto/gong/sooyeon/main_intro2.png",
        },
        {
          title: "2026 직업상담심리학\nNext Road 커리큘럼",
          description: "다음 도전자도 합격입니다.",
          name: "김형준",
          subject: "직업상담심리학",
          img: "https://img.megagong.net/profphoto/gong/pt1969/main_intro2.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.teacher-promo-section {
  margin-top: 60px;
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
