<script setup>
import * as confetti from "canvas-confetti";
import { useHistoryStore } from "@/stores/history";
import { useDatemodeStore } from "@/stores/datemode";
import { ref, onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import useClipboard from "vue-clipboard3";
import questions from "@/assets/questions";
import {
  getQuestionById,
  getQuestionByDate,
  getRandomUnansweredQuestion,
} from "@/scripts/helper";

const { toClipboard } = useClipboard();

const route = useRoute();

const historyStore = useHistoryStore();
const datemodeStore = useDatemodeStore();

const myConfetti = ref(null);
const gap = ref(0);
const userAttempt = ref(0);
const answerList = ref([]);
const question = ref([]);
const answer = ref();
const hasFound = ref(false);
const hasFinished = ref(false);
const resultCopied = ref(false);
const animationQuestionStarted = ref(false);
const animationQuestionEnded = ref(false);
const animationResultStarted = ref(false);

const reset = () => {
  answerList.value = [];
  userAttempt.value = 0;
  hasFound.value = false;
  hasFinished.value = false;
  animationQuestionEnded.value = false;
  animationQuestionStarted.value = false;
  animationResultStarted.value = false;
  resultCopied.value = false;
};

const initHistory = (questionId) => {
  const todaysQuestion = historyStore.getQuestionHistoryById(questionId);

  if (todaysQuestion) {
    answerList.value = todaysQuestion.attempts[0];
    userAttempt.value = answerList.value.length;
    hasFound.value = todaysQuestion.hasFound;
    hasFinished.value = todaysQuestion.hasFinished;
    if (hasFinished.value) {
      animationQuestionEnded.value = true;
      animationQuestionStarted.value = true;
      animationResultStarted.value = true;
    } else {
      animationQuestionEnded.value = false;
      animationQuestionStarted.value = false;
      animationResultStarted.value = false;
    }
  } else {
    reset();
  }
};

const addAnswerToAttemptList = (answer, hasFound, hasFinished) => {
  let gap = "✅";
  const answerDistance = (answer / question.value.answer) * 100;

  if (question.value.answer - answer < 0) {
    if (answerDistance < 120) {
      gap = "🔻";
    } else if (answerDistance < 160) {
      gap = "🔻🔻";
    } else {
      gap = "🔻🔻🔻";
    }
  } else if (question.value.answer - answer > 0) {
    if (answerDistance > 80) {
      gap = "🔺";
    } else if (answerDistance > 40) {
      gap = "🔺🔺";
    } else {
      gap = "🔺🔺🔺";
    }
  } else {
    gap = "✅";
  }
  answerList.value.push({
    answer: answer,
    gap,
  });

  historyStore.addAttemptToQuestion(
    question.value,
    answerList.value,
    hasFound,
    hasFinished
  );
};

const fireConfetti = () => {
  myConfetti.value({
    particleCount: 50,
    startVelocity: 30,
    spread: 360,
    angle: 0,
    origin: { x: 0.5, y: 0.25 },
  });
};

const startAnimation = () => {
  const questionTextElt = document.getElementById("question-text");

  questionTextElt.ontransitionend = async (e) => {
    if (e.propertyName === "opacity") {
      animationQuestionEnded.value = true;
      if (hasFound.value) {
        fireConfetti();
      }

      // Wait for the result content to appear
      await nextTick();

      // Start result animation
      setTimeout(() => {
        animationResultStarted.value = true;
      }, 1);
    }
  };
  animationQuestionStarted.value = true;
};

const validate = () => {
  if (answer.value) {
    userAttempt.value += 1;
    gap.value = question.value.answer - answer.value;

    if (gap.value === 0) {
      // WINNER CASE
      hasFound.value = true;
      hasFinished.value = true;
      historyStore.currentStreak++;
      if (historyStore.currentStreak > historyStore.bestStreak) {
        historyStore.bestStreak++;
      }
      startAnimation();
    } else if (userAttempt.value === question.value.attemptLimit) {
      // LOSER CASE
      hasFound.value = false;
      hasFinished.value = true;
      historyStore.currentStreak = 0;
      startAnimation();
    }
    addAnswerToAttemptList(answer.value, hasFound.value, hasFinished.value);

    answer.value = "";
    document.getElementById("input-answer").focus();

    setTimeout(() => {
      const attemptTextElt = document.querySelector(
        `#text-attempt-${answerList.value.length - 1}`
      );

      if (attemptTextElt) {
        attemptTextElt.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 100);
  }
};

const share = async () => {
  let textToShare = `Smart numdle #${question.value.id}: ${
    userAttempt.value === question.value.attemptLimit && !hasFound.value
      ? "😞"
      : userAttempt.value
  }/${question.value.attemptLimit} \r\n\r\n`;

  answerList.value.forEach((a, index) => {
    textToShare += `Tentative n°${index + 1} : ${a.gap}\r\n`;
  });

  textToShare += `\r\nhttps://smartnumdle.nitocode.com?q=${question.value.id}`;

  try {
    await toClipboard(textToShare);
    resultCopied.value = true;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  // If q parameter
  if (route.query.q) {
    question.value = getQuestionById(Number(route.query.q));
  } else {
    question.value = getRandomUnansweredQuestion(
      historyStore.getFinishedQuestions
    );
  }

  initHistory(question.value.id);

  const confettiCanvas = document.getElementById("confetti");
  myConfetti.value = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true,
  });
});

watch(
  () => datemodeStore.currentDate,
  () => {
    if (question.value) {
      question.value = getQuestionByDate(datemodeStore.currentDate);
    }
    initHistory(question.value.id);
  }
);
</script>

<template>
  <main v-if="question" class="text-center relative">
    <!-- CONFETTI CANVAS -->
    <canvas class="fixed w-full h-full z-0 top-0 left-0" id="confetti"></canvas>

    <!-- QUESTION -->
    <div
      class="relative z-10"
      v-if="(!hasFound && !hasFinished) || !animationQuestionEnded"
    >
      <div class="h-[50vh]">
        <!-- QUESTION TEXT -->
        <div
          id="question-text"
          class="my-10 transition duration-1000"
          :class="[
            {
              'translate-y-12 opacity-0': animationQuestionStarted && hasFound,
            },
            { 'opacity-0': animationQuestionStarted && !hasFound },
          ]"
        >
          <h2 class="text-3xl" v-html="question.title"></h2>
          <p class="mt-2">
            <span v-if="question.attemptLimit - userAttempt > 1"
              >(Tentatives restantes:
              {{ question.attemptLimit - userAttempt }})</span
            >
            <span class="font-bold text-amber-400" v-else
              >(Dernière tentative&nbsp;!)</span
            >
          </p>
        </div>
        <!-- ATTEMPT -->
        <div
          class="h-[20vh] overflow-hidden transition duration-500"
          :class="[
            { 'translate-y-4 opacity-0': animationQuestionStarted && hasFound },
            { 'opacity-0': animationQuestionStarted && !hasFound },
          ]"
        >
          <div
            class="h-[40px] lg:h-[20vh] overflow-scroll lg:py-10 hide-scroll"
          >
            <div v-for="(answerObj, index) in answerList" :key="index">
              <p :id="`text-attempt-${index}`" class="text-xl lg:text-lg my-4">
                Tentative n°{{ index + 1 }}: {{ answerObj.answer }} :
                {{ answerObj.gap }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- FORM -->
      <div
        class="transition duration-1000"
        :class="[
          { '-translate-y-24 opacity-0': animationQuestionStarted && hasFound },
          ,
          { 'opacity-0': animationQuestionStarted && !hasFound },
        ]"
      >
        <input
          id="input-answer"
          class="text-black px-4 py-2 text-xl block mx-auto"
          v-model="answer"
          type="number"
          @keyup.enter="validate()"
        />
        <button class="btn-numdle mt-6" @click="validate()">VALIDER</button>
      </div>
    </div>

    <!-- RESULT -->
    <div class="relative z-10" v-else>
      <!-- RESULT TEXT -->
      <div
        class="transition duration-500 opacity-0"
        :class="{ 'opacity-100': animationResultStarted }"
      >
        <div v-if="hasFound">
          <p class="text-3xl my-10">BRAVO&nbsp;!!!</p>
          <p>
            Vous avez trouvé la bonne réponse en
            {{ answerList.length }}&nbsp;tentative{{
              answerList.length > 1 ? "s" : ""
            }}&nbsp;!
          </p>
        </div>
        <div v-else>
          <p class="text-3xl my-10">Dommage&nbsp;!!!</p>
          <p class="text-xl">La bonne réponse est : {{ question.answer }}</p>
        </div>
        <p class="text-sm italic mt-2">
          À demain pour une nouvelle question&nbsp;!
        </p>
      </div>

      <div
        class="transition duration-500 delay-500 opacity-0"
        :class="{ 'opacity-100': animationResultStarted }"
      >
        <div class="separator"></div>

        <!-- ATTEMPT -->
        <p class="text-lg mb-4">Résumé Smart Numdle #{{ question.id }}</p>
        <div v-for="(answerObj, index) in answerList" :key="index">
          <p class="text-md my-4">
            Tentative n°{{ index + 1 }}: {{ answerObj.answer }} :
            {{ answerObj.gap }}
          </p>
        </div>
      </div>

      <div
        class="transition duration-500 delay-1000 opacity-0"
        :class="{ 'opacity-100': animationResultStarted }"
      >
        <div class="separator"></div>

        <!-- SHARE -->
        <div>
          <button class="btn-numdle" @click="share()">
            <span v-if="!resultCopied">Partager mon résultat</span>
            <span v-else>Résultat copié !</span>
          </button>
        </div>
      </div>

      <!-- MORE -->
      <div
        class="transition duration-500 delay-1500 opacity-0"
        :class="{ 'opacity-100': animationResultStarted }"
        v-if="question.linkForMore"
      >
        <div class="separator"></div>

        <div>
          <p class="text-xl mb-2">En savoir plus</p>
          <p>
            <a
              class="underline break-words"
              :href="question.linkForMore"
              target="_blank"
              >{{ question.linkForMore }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
