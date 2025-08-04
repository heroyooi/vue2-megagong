<template>
  <div class="main-tabs">
    <h3 class="title">넥스트공무원 1위 강사진</h3>
    <div class="tab-slide">
      <div class="tabs">
        <button
          v-for="(tab, idx) in mainTabs"
          :key="idx"
          :class="{ active: currentTab === idx }"
          @click="changeTab(idx)"
        >
          {{ tab.label }}
        </button>
      </div>

      <TabSlide
        v-if="mounted && mainTabs.length"
        :key="renderKey"
        :slides="mainTabs[currentTab].slides"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TabSlide from "./TabSlide.vue";

export default {
  components: { TabSlide },
  data() {
    return {
      currentTab: 0,
      renderKey: 0,
      mounted: true,
    };
  },
  computed: {
    ...mapState('main', ['mainTabs']),
  },
  created() {
    this.fetchMainTabs();
  },
  methods: {
    ...mapActions('main', ['fetchMainTabs']),
    changeTab(index) {
      this.currentTab = index;
      this.mounted = false;
      this.$nextTick(() => {
        this.renderKey++;
        this.mounted = true;
      });
    },
  },

};
</script>

<style scoped lang="scss">
.main-tabs {
  width: 790px;
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .tab-slide {
    .tabs {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;

      button {
        background: #f2f2f2;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        color: #333;

        &.active {
          background: #0055ff;
          color: #fff;
        }
      }
    }
  }
}
</style>
