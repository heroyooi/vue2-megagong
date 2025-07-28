<template>
  <div class="home-page">
    <div class="layout-container">
      <LeftQuickMenu />
      <main class="main-content">
        <section class="main-left">
          <MainSlide />
          <MainTabs />
          <TeacherPromoSection />
        </section>
        <aside class="main-right">
          <StickyPanel />
        </aside>
      </main>
      <RightQuickMenu />
    </div>
  </div>
</template>

<script>
import LeftQuickMenu from "@/components/LeftQuickMenu.vue";
import RightQuickMenu from "@/components/RightQuickMenu.vue";
import MainSlide from "@/components/MainSlide.vue";
import MainTabs from "@/components/MainTabs.vue";
import TeacherPromoSection from "@/components/TeacherPromoSection.vue";
import StickyPanel from "@/components/StickyPanel.vue";

export default {
  components: {
    LeftQuickMenu,
    RightQuickMenu,
    MainSlide,
    MainTabs,
    TeacherPromoSection,
    StickyPanel,
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  position: relative;
}

.main-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  gap: 30px;
}

.main-left {
  display: flex;
  flex-direction: column;
  width: 790px;
  gap: 30px;
}

.main-right {
  width: 380px;
  position: relative;
  top: 0;
  gap: 30px;
}
</style>
