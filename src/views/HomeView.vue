<script setup>
import { createPinia } from "pinia";
import { ref } from "vue";
const gap = ref(0);
const answer = ref();
const hasAnswered = ref(false);
const question = ref({
  title: "Date de création de twitch ?",
  answer: 2011,
  linkForMore: "https://fr.wikipedia.org/wiki/Twitch",
});
const validate = () => {
  console.log("answer:", answer.value);
  gap.value = answer.value - question.value.answer;
  if (gap.value === 0) {
    console.log("CONGRATS");
  } else {
    console.log("OH NO, gap:", gap);
  }
  hasAnswered.value = true;
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
    <div v-if="!hasAnswered">
      <div>
        <input v-model="answer" type="number" />
      </div>
      <br />
      <button @click="validate()">VALIDER</button>
    </div>
    <div v-else>
      <div v-if="gap === 0">
        <p>Bonne réponse</p>
      </div>
      <div v-else>
        <p>Mauvaise réponse<br /></p>
        <p>La bonne réponse est : {{ question.answer }}</p>
        <p>Votre réponse : {{ answer }}</p>
        <p>Ecart : {{ gap }}</p>
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
