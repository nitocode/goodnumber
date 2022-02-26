<script setup>
import { useDatemodeStore } from "@/stores/datemode";
const openModal = (modalName) => {
  emit("open", modalName);
};
const datemodeStore = useDatemodeStore();
const activateDatemode = () => {
  // Switch store to date mode
  datemodeStore.switch();
};

const emit = defineEmits(["open"]);
</script>
<template>
  <header class="flex justify-between items-center mx-4 mb-8 relative z-10">
    <h1 class="text-2xl font-mono">SMART NUMDLE</h1>
    <div class="flex justify-between w-[120px]">
      <!-- <p>Stat</p> -->
      <img
        class="w-[32px] h-[32px] cursor-pointer"
        @click="openModal('stats')"
        src="@/assets/stat.svg"
        alt="icone pour ouvrir les statistiques"
      />
      <img
        class="w-[32px] h-[32px] cursor-pointer"
        @click="activateDatemode()"
        src="@/assets/time.svg"
        alt="icone pour passer au mode historique"
      />
      <img
        class="w-[32px] h-[32px] cursor-pointer"
        @click="openModal('rules')"
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
