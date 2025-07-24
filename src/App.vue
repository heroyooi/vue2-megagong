<template>
  <div>
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/Header.vue";
import MainFooter from "@/components/Footer.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>
