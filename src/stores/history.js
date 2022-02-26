import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useHistoryStore = defineStore({
  id: "history",
  state: () => ({
    questionHistory: useStorage("questionHistory", []),
    bestStreak: useStorage("bestStreak", 0),
    currentStreak: useStorage("currentStreak", 0),
  }),
  getters: {
    history: (state) => state.questionHistory,
    getTodaysQuestion: (state) => {
      return state.questionHistory.filter(
        (item) =>
          new Date(item.date).getTime() === new Date().setHours(0, 0, 0, 0)
      )[0];
    },
    getQuestionHistoryByDate: (state) => {
      return (date) =>
        state.questionHistory.filter(
          (item) =>
            new Date(item.date).getTime() ===
            new Date(date).setHours(0, 0, 0, 0)
        )[0];
    },
  },
  actions: {
    addAttemptToQuestion(question, attempt, hasFound, hasFinished) {
      const questionFromHistory = this.questionHistory.filter(
        (item) =>
          new Date(item.date).getTime() === new Date(question.date).getTime()
      )[0];

      if (questionFromHistory) {
        // Add attempt
        questionFromHistory.attempts.push(attempt);
        questionFromHistory.hasFound = hasFound;
        questionFromHistory.hasFinished = hasFinished;
      } else {
        // Create first attempt of new history
        this.questionHistory.push({
          id: question.id,
          date: question.date,
          attempts: [attempt],
          hasFound: hasFound,
          hasFinished: hasFinished,
        });
      }
    },
  },
});
