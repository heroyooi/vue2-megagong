<template>
  <div class="main-tabs">
    <h3 class="title">넥스트공무원 1위 강사진</h3>
    <div class="tab-slide">
      <div class="tabs">
        <button
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="{ active: currentTab === idx }"
          @click="changeTab(idx)"
        >
          {{ tab.label }}
        </button>
      </div>

      <TabSlide v-if="mounted" :key="renderKey" :slides="tabs[currentTab].slides" />
    </div>
  </div>
</template>

<script>
import TabSlide from "./TabSlide.vue";

export default {
  components: { TabSlide },
  data() {
    return {
      currentTab: 0,
      renderKey: 0,
      mounted: true,
      tabs: [
        {
          label: "국어",
          slides: [
            {
              img: "https://img.megagong.net/profphoto/gong/gilltoraebi/main_intro.png",
              alt: "이윤주",
              subject: "국어",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/jhssam1003/main_intro.png",
              alt: "임지혜",
              subject: "국어",
            },
          ],
        },
        {
          label: "영어",
          slides: [
            {
              img: "https://img.megagong.net/profphoto/gong/tjenglish08/main_intro.png",
              alt: "조태정",
              subject: "영어",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/megamega2/main_intro.png",
              alt: "성정혜",
              subject: "영어",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/incredvoc/main_intro.png",
              alt: "경선식",
              subject: "영어",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/nojoony1/main_intro.png",
              alt: "박노준",
              subject: "영어",
            },
          ],
        },
        {
          label: "한국사",
          slides: [
            {
              img: "https://img.megagong.net/profphoto/gong/gosabu88/main_intro.png",
              alt: "고종훈",
              subject: "한국사",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/vision0911/main_intro.png",
              alt: "라영환",
              subject: "한국사",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/duwo20405/main_intro.png",
              alt: "최영재",
              subject: "한국사",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/jeonhangil/main_intro.png",
              alt: "전한길",
              subject: "한국사",
            },
          ],
        },
        {
          label: "행정학",
          slides: [
            {
              img: "https://img.megagong.net/profphoto/gong/plower3362/main_intro.png",
              alt: "황철곤",
              subject: "행정학",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/happy0308/main_intro.png",
              alt: "이상헌",
              subject: "행정학",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/shin242/main_intro.png",
              alt: "신용한",
              subject: "행정학",
            },
          ],
        },
        {
          label: "행정법",
          slides: [
            {
              img: "https://img.megagong.net/profphoto/gong/allawyer/main_intro.png",
              alt: "유휘운",
              subject: "행정법",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/wjsgywls1/main_intro.png",
              alt: "전효진",
              subject: "행정법",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/geek2991/main_intro.png",
              alt: "정인국",
              subject: "행정법",
            },
            {
              img: "https://img.megagong.net/profphoto/gong/ysw7/main_intro.png",
              alt: "양승우",
              subject: "행정법",
            },
          ],
        },
      ],
    };
  },
  methods: {
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
