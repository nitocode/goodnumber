<script setup>
const openRules = () => {
  emit("open");
};

const emit = defineEmits(["open"]);
</script>
<template>
  <header class="flex justify-between items-center mx-4 mb-8 relative z-10">
    <h1 class="text-2xl font-mono">SMART NUMDLE</h1>
    <div class="flex flex-row-reverse justify-between w-[80px]">
      <!-- <p>Stat</p> -->
      <img
        class="w-[32px] h-[32px] cursor-pointer"
        @click="openRules()"
        src="@/assets/rules.svg"
        alt="icone pour ouvrir les règles du jeu"
      />
      <!-- <a
        class="cursor-pointer"
        href="https://github.com/nitocode/smartnumdle"
        target="_blank"
      >
        <img src="@/assets/github.png" alt="Github code source"
      /></a> -->
    </div>
  </header>
</template>
