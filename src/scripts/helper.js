const getNumberOfDaysSinceBeginning = () => {
  const initialDate = new Date("02-20-2022");
  const currentDate = new Date();

  const dayDiff =
    (currentDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24);

  return Math.floor(dayDiff || 0);
};

export { getNumberOfDaysSinceBeginning };
