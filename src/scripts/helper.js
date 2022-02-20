const getNumberOfDaysSinceBeginning = () => {
  const initialDate = new Date("2022-2-20");
  const currentDate = new Date();

  const dayDiff =
    (currentDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24);

  return Math.floor(dayDiff || 0);
};

export { getNumberOfDaysSinceBeginning };
