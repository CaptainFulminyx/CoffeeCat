import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    drawerOpen: false
  }),
  actions: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen
    }
  }
})