<script setup>
import { createPinia } from "pinia";
import { ref } from "vue";
import questions from "@/assets/questions";
import { getNumberOfDaysSinceBeginning as daySinceBeginning } from "@/scripts/helper";

const gap = ref(0);
const userAttempt = ref(0);
const answerList = ref([]);
const answer = ref();
const hasFound = ref(false);
const gameOver = ref(false);
const resultCopied = ref(false);

const question = ref(questions[daySinceBeginning()]);

const addAnswerToAttemptList = (answer) => {
  let gap = "✅";
  if (question.value.answer - answer < 0) {
    gap = "🔻";
  } else if (question.value.answer - answer > 0) {
    gap = "🔺";
  } else {
    gap = "✅";
  }
  answerList.value.push({
    answer: answer,
    gap,
  });
};

const validate = () => {
  if (answer.value) {
    userAttempt.value += 1;
    gap.value = question.value.answer - answer.value;

    if (gap.value === 0) {
      hasFound.value = true;
      gameOver.value = true;
    } else {
      if (userAttempt.value === question.value.attemptLimit) {
        hasFound.value = false;
        gameOver.value = true;
      }
    }
    addAnswerToAttemptList(answer.value);

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

const share = () => {
  let textToShare = `Good number #${question.value.id}: ${
    userAttempt.value === question.value.attemptLimit && !hasFound.value
      ? "😞"
      : userAttempt.value
  }/${question.value.attemptLimit} \r\n\r\n`;

  answerList.value.forEach((a, index) => {
    textToShare += `Tentative n°${index + 1} : ${a.gap}\r\n`;
  });

  textToShare += "\r\nsmartnumdle.nitocode.com";

  navigator.clipboard.writeText(textToShare).then(
    function () {
      resultCopied.value = true;
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};
</script>

<template>
  <main class="text-center">
    <div v-if="!hasFound && !gameOver">
      <div class="h-[50vh]">
        <div class="my-10">
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
        <div class="h-[20vh] overflow-hidden">
          <div class="h-[20vh] overflow-scroll py-10 hide-scroll">
            <div v-for="(answerObj, index) in answerList" :key="index">
              <p :id="`text-attempt-${index}`" class="text-xl lg:text-lg my-4">
                Tentative n°{{ index + 1 }}: {{ answerObj.answer }} :
                {{ answerObj.gap }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input
          id="input-answer"
          class="text-black px-4 py-2 text-xl"
          v-model="answer"
          type="number"
          @keyup.enter="validate()"
        />
      </div>
      <br />
      <button class="btn-numdle" @click="validate()">VALIDER</button>
    </div>
    <div v-else>
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

      <div class="separator"></div>

      <p class="text-lg mb-4">Résumé</p>
      <div v-for="(answerObj, index) in answerList" :key="index">
        <p class="text-md my-4">
          Tentative n°{{ index + 1 }}: {{ answerObj.answer }} :
          {{ answerObj.gap }}
        </p>
      </div>

      <div class="separator"></div>

      <div class="">
        <button class="btn-numdle" @click="share()">
          <span v-if="!resultCopied">Partager mon résultat</span>
          <span v-else>Résultat copié !</span>
        </button>
      </div>
      <div v-if="question.linkForMore">
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
