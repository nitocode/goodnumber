import questions from "@/assets/questions";

const getNumberOfDaysSinceBeginning = () => {
  const initialDate = new Date("2022-2-20");
  const currentDate = new Date();

  const dayDiff =
    (currentDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24);

  return Math.floor(dayDiff || 0);
};

const getQuestionByDate = (date) => {
  return questions.filter((item) => {
    return (
      new Date(item.date).getTime() === new Date(date).setHours(0, 0, 0, 0)
    );
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
  getQuestionByDate,
  getQuestionsUntilDate,
  getYesterdayDate,
  getTomorrowDate,
  cleanNumber,
};
