import { defineStore } from "pinia";

export const useInfoStore = defineStore("info", {
  state: () => ({
    title: "website",
  }),
  getters: {
    getTitle: (state) => state.title,
  },
  actions: {
    changeTitle(val: string) {
      this.title = val;
    },
  },
});
