<template>
  <div class="sticky-panel">
    <MainRightContent />
  </div>
</template>

<script>
import MainRightContent from "./MainRightContent.vue";

export default {
  components: { MainRightContent },
};
</script>

<style scoped>
.sticky-panel {
  position: sticky;
  top: 30px;
}
</style>
