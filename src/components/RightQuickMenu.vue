<template>
  <div class="right-quick-menu">
    <div class="quick-card play-card">
      <img
        src="https://img.megagong.net/m/2025/0715_playground/bnr_right_gong1.png"
        alt="이벤트 이미지"
      />
    </div>

    <div class="quick-card coupon-card">
      <p class="badge">30% 할인<br />쿠폰 증정</p>
      <p class="main-text">e-교재<br /><span class="blue">첫 구매 이벤트</span></p>
      <button class="detail-btn">자세히 보기</button>
    </div>

    <div class="quick-card nextpass-card">
      <p class="small">모든 수험생을 위한</p>
      <p class="blue-bold">공무원 넥스트패스<br />맞춤 할인 혜택</p>
      <button class="tag-btn" :class="{ on: activeTag === 0 }">전·현직 공무원</button>
      <button class="tag-btn" :class="{ on: activeTag === 1 }">
        희망 인기가<br />(저소득/차상위)
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightQuickMenu",
  data() {
    return {
      activeTag: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.activeTag = (this.activeTag + 1) % 2;
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style lang="scss" scoped>
.right-quick-menu {
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: 630px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 99;
}

.quick-card {
  width: 120px;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  font-size: 12px;
  line-height: 1.4;
  border: 1px solid #ddd;
  background: #fff;
}

.play-card {
  padding: 0;
  border: 0;
}

.badge {
  font-weight: bold;
  color: #222;
}

.main-text {
  margin: 4px 0;
}

.main-text .blue {
  color: #0070f3;
  font-weight: 700;
}

.detail-btn {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 2px 8px;
  font-size: 11px;
  margin-top: 4px;
}

.nextpass-card .blue-bold {
  color: #0070f3;
  font-weight: 700;
  margin: 4px 0;
}

.nextpass-card .tag-btn {
  background-color: #eee;
  border: none;
  font-size: 11px;
  border-radius: 3ch;
  padding: 2px 6px;
  margin-bottom: 4px;
  transition: all 0.3s;
  &.on {
    background: #0070f3;
    color: #fff;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

.sub-text {
  font-size: 11px;
  color: #666;
}
</style>
