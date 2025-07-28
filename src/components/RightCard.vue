<template>
  <div class="right-card">
    <img class="icon" :src="img" :alt="title" />
    <div class="text">
      <p class="title">{{ title }}</p>
      <p class="desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightCard",
  props: {
    img: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.right-card {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  transition: 0.2s ease;
  &:last-of-type {
    margin-bottom: 0;
  }
}

.icon {
  width: 140px;
  height: 90px;
  object-fit: cover;
  margin-right: 12px;
  border-radius: 8px;
}

.text .title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.text .desc {
  font-size: 12px;
  color: #666;
}
</style>
