<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
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
