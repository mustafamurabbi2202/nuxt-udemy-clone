// stores/footerStore.ts
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footerStore', {
  state: () => ({
    isFooterVisible: false,
  }),
  actions: {
    showFooter() {
      this.isFooterVisible = true
    },
    hideFooter() {
      this.isFooterVisible = false
    },
  },
})