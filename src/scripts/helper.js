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

const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export { getNumberOfDaysSinceBeginning, getFormattedDate, getQuestionByDate };
