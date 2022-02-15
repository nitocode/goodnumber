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

const getSquaredAnswer = (answerLength, isUserAnswer) => {
  let squareText = "";
  for (let i = 0; i < answerLength; i++) {
    squareText += isUserAnswer ? "🟨" : "🟩";
  }
  return squareText;
};

const getUserText = (userAnswer, goodAnswer) => {
  let userText = "";
  let goodAnswerArray = goodAnswer.toString().split("");
  let userAnswerArray = userAnswer.toString().split("");
  for (let i = goodAnswerArray.length; i > 0; i--) {
    console.log("goodAnswerArray[i]", goodAnswerArray[i - 1]);
    console.log("eee[i]", userAnswerArray[i - 1]);
    if (goodAnswerArray[i - 1] === userAnswerArray[i - i]) {
      userText += "g";
    } else {
      userText += "y";
    }
  }
  userText = userText.split("").reverse().join("");

  userText = userText.replace(/g/g, "🟩");
  userText = userText.replace(/y/g, "🟨");

  console.log("userText", userText);
  return userText;
};

const share = () => {
  let textToShare = "";
  const greenSquareText = getSquaredAnswer(
    question.value.answer.toString().length,
    false
  );
  // const yellowSquareText = getSquaredAnswer(
  //   question.value.answer.toString().length,
  //   true
  // );

  if (gap.value === 0) {
    textToShare = greenSquareText;
  } else {
    textToShare = `${getUserText(answer.value, question.value.answer)} -- [${
      gap.value
    }] -- > ${greenSquareText}`;
  }
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
  <main>
    <h1>{{ question.title }}</h1>
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
          {{ answerList.length }} tentatives !
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
