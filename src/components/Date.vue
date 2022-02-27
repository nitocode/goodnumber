<script setup>
import { ref, onMounted } from "vue";

import questions from "@/assets/questions";
import { useHistoryStore } from "@/stores/history";
import { useDatemodeStore } from "@/stores/datemode";
import {
  getYesterdayDate,
  getTomorrowDate,
  getQuestionByDate,
  getFormattedDate,
} from "@/scripts/helper";

const historyStore = useHistoryStore();
const datemodeStore = useDatemodeStore();

const selectedDate = ref(null);
const historyDateTime = ref(null);
const currentQuestion = ref(null);

const currentDateTime = new Date().setHours(0, 0, 0, 0);

const initDateTime = () => {
  historyDateTime.value = new Date(datemodeStore.currentDate).getTime();
  selectedDate.value = new Date(datemodeStore.currentDate).toLocaleDateString();
  currentQuestion.value = getQuestionByDate(datemodeStore.currentDate);
};

const nextQuestion = () => {
  datemodeStore.changeCurrentDate(
    getFormattedDate(getTomorrowDate(new Date(datemodeStore.currentDate)))
  );
  initDateTime();
};

const prevQuestion = () => {
  datemodeStore.changeCurrentDate(
    getFormattedDate(getYesterdayDate(new Date(datemodeStore.currentDate)))
  );
  initDateTime();
};

onMounted(() => {
  initDateTime();
});
</script>

<template>
  <div class="relative z-10 flex flex-row justify-around items-center">
    <div
      class="cursor-pointer opacity-0"
      :class="{ 'opacity-100': currentQuestion && currentQuestion.id > 1 }"
      @click="currentQuestion && currentQuestion.id > 1 ? prevQuestion() : null"
    >
      <img
        class="w-[28px] h-[28px]"
        src="@/assets/left.svg"
        alt="left arrow image"
      />
    </div>
    <div>
      <p>
        {{ selectedDate }}
        <span v-if="currentQuestion && currentQuestion.id"
          >- #{{ currentQuestion.id }}</span
        >
      </p>
    </div>
    <div
      class="cursor-pointer opacity-0"
      :class="{ 'opacity-100': historyDateTime < currentDateTime }"
      @click="historyDateTime < currentDateTime ? nextQuestion() : null"
    >
      <img
        class="w-[28px] h-[28px]"
        src="@/assets/right.svg"
        alt="right arrow image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
