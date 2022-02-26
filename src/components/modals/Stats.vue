<script setup>
import { ref, onMounted } from "vue";
import useClipboard from "vue-clipboard3";
import { useHistoryStore } from "@/stores/history";
import {
  getQuestionsUntilDate,
  getFormattedDate,
  cleanNumber,
} from "@/scripts/helper";

const { toClipboard } = useClipboard();
const historyStore = useHistoryStore();

const stats = ref({
  statCurrentStreak: {
    title: "Série courante de bonnes réponses consécutives",
    value: "",
  },
  statBestStreak: {
    title: "Record de bonnes réponses consécutives",
    value: "",
  },
  statAvgAttempt: {
    title: "Moyenne de tentatives par question terminée",
    value: "",
  },
  statPerFound: {
    title: "Pourcentage de réponses trouvées",
    value: "",
  },
  statPerAnswered: {
    title: "Pourcentage de questions effectuées",
    value: "",
  },
});

const resultCopied = ref(false);

const initData = () => {
  stats.value.statCurrentStreak.value = historyStore.currentStreak;
  stats.value.statBestStreak.value = historyStore.bestStreak;
  stats.value.statAvgAttempt.value =
    historyStore.getFinishedQuestions.length > 0
      ? cleanNumber(
          historyStore.getFinishedQuestions.reduce((total, question) => {
            return total + question.attempts.length;
          }, 0) / historyStore.getFinishedQuestions.length
        )
      : 0;

  stats.value.statPerFound.value = `${cleanNumber(
    (historyStore.getFoundQuestions.length /
      getQuestionsUntilDate(getFormattedDate(new Date())).length) *
      100
  )}%`;

  stats.value.statPerAnswered.value = `${cleanNumber(
    (historyStore.getFinishedQuestions.length /
      getQuestionsUntilDate(getFormattedDate(new Date())).length) *
      100
  )}%`;
};

const share = async () => {
  let textToShare = "Mes statistiques Smart numdle 📊\r\n\r\n";
  Object.keys(stats.value).forEach((key) => {
    textToShare += `${stats.value[key].title}: ${stats.value[key].value}\r\n`;
  });
  textToShare += "\r\nhttps://smartnumdle.nitocode.com";

  try {
    await toClipboard(textToShare);
    resultCopied.value = true;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  initData();
});

const close = () => {
  emit("close", "stats");
};
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="stats-modal fixed z-50 h-screen w-screen left-0 top-0"
    @click.self="close()"
  >
    <div
      class="stats-container border-2 border-white rounded fixed max-w-[400px] w-5/6 h-[500px] max-h-[90vh] mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll hide-scroll"
    >
      <div class="p-4 text-sm">
        <div class="fixed top-4 right-4 cursor-pointer" @click="close()">
          <img
            class="w-[20px] h-[20px]"
            src="@/assets/cross.svg"
            alt="croix de fermeture de modal des règles"
          />
        </div>
        <h2 class="text-center font-bold text-lg my-4">Statistiques</h2>

        <table class="table-auto my-10">
          <tbody>
            <tr v-for="(k, index) in Object.keys(stats)" :key="index">
              <td class="py-2 w-[70%]">{{ stats[k].title }}</td>
              <td class="py-2 text-3xl text-center">
                {{ stats[k].value }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- SHARE -->
        <div class="text-center mt-4">
          <button class="btn-numdle" @click="share()">
            <span v-if="!resultCopied">Partager mes stats</span>
            <span v-else>Stats copiées !</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stats-modal {
  background: rgba(0, 0, 0, 0.5);
  .stats-container {
    background-color: #3d4451;
  }
}
</style>
