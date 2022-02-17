<script setup>
import { createPinia } from "pinia";
import { ref } from "vue";
const gap = ref(0);
const attemptLimit = ref(4);
const userAttempt = ref(0);
const answerList = ref([]);
const answer = ref();
const hasFound = ref(false);
const gameOver = ref(false);
const question = ref({
  id: 1,
  title: "Date de création de twitch ?",
  answer: 2011,
  linkForMore: "https://fr.wikipedia.org/wiki/Twitch",
});

const addAnswerToAttemptList = (answer) => {
  let gap = "=";
  if (question.value.answer - answer < 0) {
    gap = "-";
  } else if (question.value.answer - answer > 0) {
    gap = "+";
  } else {
    gap = "=";
  }
  answerList.value.push({
    answer: answer,
    gap,
  });
};

const validate = () => {
  userAttempt.value += 1;
  gap.value = question.value.answer - answer.value;

  if (gap.value === 0) {
    hasFound.value = true;
    gameOver.value = true;
  } else {
    if (userAttempt.value === attemptLimit.value) {
      hasFound.value = false;
      gameOver.value = true;
    }
  }
  addAnswerToAttemptList(answer.value);
};

const share = () => {
  let textToShare = `Good number #${question.value.id}: ${
    userAttempt.value === attemptLimit.value ? "😞" : userAttempt.value
  }/${attemptLimit.value} \r\n\r\n`;

  answerList.value.forEach((a, index) => {
    textToShare += `Tentative n°${index + 1} : ${a.gap}\r\n`;
  });

  textToShare += "\r\ngoodnumber.nitocode.com";

  navigator.clipboard.writeText(textToShare).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};
</script>

<template>
  <main class="text-center">
    <h2>{{ question.title }}</h2>
    <div v-if="!hasFound && !gameOver">
      <div v-for="(answerObj, index) in answerList" :key="index">
        Tentative n°{{ index + 1 }}: {{ answerObj.answer }} :
        {{ answerObj.gap }}
      </div>
      <div>
        <input v-model="answer" type="number" />
      </div>
      <br />
      <button @click="validate()">VALIDER</button>
    </div>
    <div v-else>
      <div v-if="hasFound">
        <p>BRAVO !!!</p>
        <p>
          Vous avez trouvé la bonne réponse en
          {{ answerList.length }} tentative{{
            answerList.length > 1 ? "s" : ""
          }}
          !
        </p>
      </div>
      <div v-else>
        <p>Dommage !!!</p>
        <p>La bonne réponse est : {{ question.answer }}</p>
      </div>

      <div v-for="(answerObj, index) in answerList" :key="index">
        Tentative n°{{ index + 1 }}: {{ answerObj.answer }} :
        {{ answerObj.gap }}
      </div>

      <div v-if="question.linkForMore">
        <p>
          En savoir plus :
          <a :href="question.linkForMore" target="_blank">{{
            question.linkForMore
          }}</a>
        </p>
      </div>

      <p>Partager ma réponse à mes amis:</p>
      <button @click="share()">Partage</button>
    </div>
  </main>
</template>

<style scoped></style>
