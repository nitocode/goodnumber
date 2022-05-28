import questions from "@/assets/questions";

const getNumberOfDaysSinceBeginning = () => {
  const initialDate = new Date("2022-2-20");
  const currentDate = new Date();

  const dayDiff =
    (currentDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24);

  return Math.floor(dayDiff || 0);
};

const getRandomUnansweredQuestion = (answeredQuestionHistory) => {
  let idsAnswered = [];
  answeredQuestionHistory.forEach((elt) => {
    idsAnswered.push(elt.id);
  });
  const unansweredQuestions = questions.filter((item) => {
    return idsAnswered.indexOf(item.id) === -1;
  });

  // Get a random index
  return unansweredQuestions[
    Math.round(Math.random() * (unansweredQuestions.length - 1 - 0) + 0)
  ];
};

const getQuestionById = (id) => {
  return questions.filter((item) => {
    return item.id === id;
  })[0];
};

const getQuestionByDate = (date) => {
  // date ex: 2022-2-23
  return questions.filter((item) => {
    return item.date === date;
  })[0];
};

const getQuestionsUntilDate = (date) => {
  return questions.filter((item) => {
    return new Date(item.date).getTime() <= new Date(date).setHours(0, 0, 0, 0);
  });
};

const getFormattedDate = (dateObj) => {
  return `${dateObj.getFullYear()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getDate()}`;
};

const getYesterdayDate = (dateObj) => {
  return new Date(dateObj.getTime() - 24 * 60 * 60 * 1000);
};

const getTomorrowDate = (dateObj) => {
  return new Date(dateObj.getTime() + 24 * 60 * 60 * 1000);
};

const cleanNumber = (number) => {
  return Number.isInteger(number) ? number : number.toFixed(2);
};

export {
  getNumberOfDaysSinceBeginning,
  getFormattedDate,
  getQuestionById,
  getRandomUnansweredQuestion,
  getQuestionByDate,
  getQuestionsUntilDate,
  getYesterdayDate,
  getTomorrowDate,
  cleanNumber,
};
