<script setup>
const openRules = () => {
  emit("open");
};

const emit = defineEmits(["open"]);
</script>
<template>
  <header class="flex justify-between items-center mx-4 mb-8">
    <h1 class="text-2xl">SMART NUMDLE</h1>
    <div class="flex justify-between w-[80px]">
      <!-- <p>Stat</p> -->
      <img
        class="w-[32px] h-[32px]"
        @click="openRules()"
        src="@/assets/rules.svg"
        alt="icone pour ouvrir les règles du jeu"
      />
      <a
        class="cursor-pointer"
        href="https://github.com/nitocode/smartnumdle"
        target="_blank"
      >
        <img src="@/assets/github.png" alt="Github code source"
      /></a>
    </div>
  </header>
</template>
