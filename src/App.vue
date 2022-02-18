<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import Rules from "@/components/Rules.vue";
import Header from "@/components/Header.vue";
import "@/assets/base.css";

const displayRules = ref(false);

const openRules = () => {
  displayRules.value = true;
};
const closeRules = () => {
  displayRules.value = false;
};

const router = useRouter();
onMounted(() => {
  // Github pages SPA workaround
  let path = localStorage.getItem("path");
  if (path) {
    localStorage.removeItem("path");
    router.push(path);
  }
});
</script>

<template>
  <div class="app-container text-white min-h-screen px-4 py-8">
    <Rules @close="closeRules()" class="" v-if="displayRules" />
    <div class="max-w-[500px] mx-auto">
      <Header @open="openRules()" />
      <RouterView />
    </div>
  </div>
</template>

<style></style>
