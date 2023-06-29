import { defineStore } from "pinia";

interface Cmd {
  to?: string;
  url?: string;
  click?: ($event: any) => void;
}

export const useInfoStore = defineStore("info", {
  state: () => ({
    title: "website",
    menu: [],
    actions: [],
  }),
  getters: {
    getTitle: (state) => state.title,
    getMenu: (state) => state.menu,
    isEmptyMenu: (state) => state.menu.length === 0,
    getActions: (state) => state.actions
  },
  actions: {
    changeTitle(val: string) {
      this.title = val;
    },
    addMenu(path: string, text: string) {
      this.menu.push({ path, text });
    },
    addAction(icon: string, cmd: Cmd) {
      this.actions.push({ icon, cmd });
    },
    clearActions() {
      this.actions = [];
    }
  },
});
