import { defineStore } from "pinia";
import { getFormattedDate } from "@/scripts/helper";

export const useDatemodeStore = defineStore("datemode", {
  state: () => {
    return {
      currentDate: getFormattedDate(new Date()),
      datemode: false,
    };
  },
  getters: {
    getCurrentDate: (state) => state.currentDate,
  },
  actions: {
    switch() {
      this.datemode = !this.datemode;
    },
    changeCurrentDate(date) {
      this.currentDate = date;
    },
  },
});
