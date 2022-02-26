<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";

import { useDatemodeStore } from "@/stores/datemode";

import Rules from "@/components/Rules.vue";
import Header from "@/components/Header.vue";
import Date from "@/components/Date.vue";
import "@/assets/base.css";

const datemodeStore = useDatemodeStore();

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
    <Rules @close="closeRules()" v-if="displayRules" />
    <div class="max-w-[500px] mx-auto">
      <Header @open="openRules()" />
      <Date v-if="datemodeStore.datemode" />
      <RouterView />
    </div>
  </div>
</template>

<style></style>
