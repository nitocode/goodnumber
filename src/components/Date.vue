<script setup>
import { ref } from "vue";

import questions from "@/assets/questions";
import { useHistoryStore } from "@/stores/history";
import { useDatemodeStore } from "@/stores/datemode";
import { getYesterdayDate, getTomorrowDate } from "@/scripts/helper";

const historyStore = useHistoryStore();
const datemodeStore = useDatemodeStore();

const todaysQuestion = ref(null);
const storeDate = ref(null);
const historyDateTime = ref(null);

const currentDateTime = new Date().setHours(0, 0, 0, 0);
storeDate.value = historyStore.getTodaysQuestion.date;

const initDateTime = () => {
  historyDateTime.value = new Date(datemodeStore.currentDate).getTime();
  todaysQuestion.value = new Date(
    datemodeStore.currentDate
  ).toLocaleDateString();
};

initDateTime();

const nextQuestion = () => {
  datemodeStore.changeCurrentDate(
    getTomorrowDate(new Date(datemodeStore.currentDate))
  );
  initDateTime();
};

const prevQuestion = () => {
  datemodeStore.changeCurrentDate(
    getYesterdayDate(new Date(datemodeStore.currentDate))
  );
  initDateTime();
};
</script>

<template>
  <div class="relative z-10 flex flex-row justify-around items-center">
    <div v-show="true" class="cursor-pointer" @click="prevQuestion()">
      prec.
    </div>
    <div>
      <p>{{ todaysQuestion }}</p>
    </div>
    <div
      class="cursor-pointer opacity-0"
      :class="{ 'opacity-100': historyDateTime < currentDateTime }"
      @click="historyDateTime < currentDateTime ? nextQuestion() : null"
    >
      suiv.
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
