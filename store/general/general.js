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
    console.log('in AssignFooterState')
    await commit(MUTATE_FOOTER_STATE, payload)
  }
}
