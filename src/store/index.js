import { areas, mobs } from './data.js'

const adaptMobs = (areas, mobs) => {
  areas.forEach(area => {
    area.mobs = area.mobIds.map(mobId => {
      return mobs.find(mob => mob.id === mobId)
    })
  })
  return areas
}

export default {
  state: {
    areas: [],
    mobs: []
  },
  actions: {
    fetchArea({ commit }) {
      commit('updateArea', adaptMobs(areas, mobs))
    },

    fetchMob({ commit }) {
      commit('updateMob', mobs)
    }
  },
  getters: {},
  mutations: {
    updateArea(state, data) {
      state.areas = data
    },
    updateMob(state, data) {
      state.mobs = data
    }
  }
}
