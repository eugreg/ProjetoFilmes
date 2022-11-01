<script>
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  components: {
    HeaderComp,
  },
};
</script>

<template>
  <div id="app">
    <HeaderComp />
    <RouterView />
  </div>
</template>

<style></style>
