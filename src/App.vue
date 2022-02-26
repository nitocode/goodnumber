<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";

import { useDatemodeStore } from "@/stores/datemode";

import Rules from "@/components/modals/Rules.vue";
import Stats from "@/components/modals/Stats.vue";
import Header from "@/components/Header.vue";
import Date from "@/components/Date.vue";
import "@/assets/base.css";

const datemodeStore = useDatemodeStore();

const modals = ref({
  rules: {
    isOpen: false,
  },
  stats: {
    isOpen: false,
  },
});

const openModal = (modalName) => {
  modals.value[modalName].isOpen = true;
};
const closeModal = (modalName) => {
  modals.value[modalName].isOpen = false;
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
    <Rules @close="closeModal" v-if="modals['rules'].isOpen" />
    <Stats @close="closeModal" v-if="modals['stats'].isOpen" />
    <div class="max-w-[500px] mx-auto">
      <Header @open="openModal" />
      <Date v-if="datemodeStore.datemode" />
      <RouterView />
    </div>
  </div>
</template>

<style></style>
