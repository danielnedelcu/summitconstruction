import Services from '~/services/services.js'
import { MUTATE_OVERLAY_STATE, MUTATE_FOOTER_STATE } from '~/constants/mutations.type'

export const state = () => ({
  overlayState: 0,
  footer: {}
})

export const getters = {
  getOverlayState: (state) => {
    return state.overlayState
  },

  getFooterState: (state) => {
    return state.footer
  }
}

export const mutations = {
  mutateOverlayState: (state, obj) => {
    state.overlayState = obj
  },

  mutateFooterState: (state, obj) => {
    state.footer = obj
  }
}

export const actions = {
  async AssignOverlayState ({ commit }, payload) {
    await commit(MUTATE_OVERLAY_STATE, payload)
  },

  async AssignFooterState ({ commit }, payload) {
    const convertArrayToObject = (array, key) =>
      array.reduce((obj, item) => ((obj = item), obj), {})

    const response = await Services.getData('settings/settings')
    await commit(MUTATE_FOOTER_STATE, convertArrayToObject(response.data.stories[0].content.placeholder.filter(e => e.component === 'footer')))
  }
}
