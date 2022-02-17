<script setup>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/base.css";
</script>

<template>
  <div class="app-container text-white h-screen px-4 overflow-hidden">
    <div class="max-w-[500px] mx-auto">
      <header class="flex justify-between items-center mx-4 py-8">
        <h1 class="text-2xl">NUMDLE</h1>
        <div class="flex justify-around items-center w-[100px]">
          <p>Stat</p>
          <p>Git</p>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style>
.app-container {
  background-color: #3d4451;
}
</style>
