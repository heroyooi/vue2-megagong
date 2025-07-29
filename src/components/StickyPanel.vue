<template>
  <div class="sticky-panel">
    <MainRightSlide />
  </div>
</template>

<script>
import MainRightSlide from "./MainRightSlide.vue";

export default {
  components: { MainRightSlide },
};
</script>

<style scoped>
.sticky-panel {
  position: sticky;
  top: 30px;
}
</style>
