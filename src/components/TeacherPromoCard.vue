<template>
  <div class="promo-card">
    <div class="text-area">
      <h4 class="title">{{ title }}</h4>
      <p class="desc">{{ description }}</p>
      <p class="subject">{{ subject }} {{ name }}</p>
    </div>
    <img class="profile-img" :src="img" :alt="name" />
  </div>
</template>

<script>
export default {
  name: "TeacherPromoCard",
  props: {
    title: String,
    description: String,
    name: String,
    subject: String,
    img: String,
  },
};
</script>

<style scoped>
.promo-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: 0.2s ease;
}

.promo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.text-area {
  flex: 1;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #111;
}

.desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.subject {
  font-size: 13px;
  color: #333;
  font-weight: 500;
}

.profile-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 16px;
}
</style>
