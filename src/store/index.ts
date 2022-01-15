import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 0,
      name: 'hzy',
      isAdmin: true,
    }
  },
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    insertPost(data: string) {
      this.name = data
    },
  },
})
