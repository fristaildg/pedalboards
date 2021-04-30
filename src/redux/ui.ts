import { createSlice } from '@reduxjs/toolkit'

export type UiState = {
  zoom: number
  prevZoom: number
  fitScreen: boolean
  pedalModal: {
    pedalName: string | null
    isOpen: boolean
  }
}

const initialState: UiState = {
  zoom: 100,
  prevZoom: 100,
  fitScreen: false,
  pedalModal: {
    pedalName: null,
    isOpen: false
  }
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setZoom(state, action) {
      state.zoom = action.payload
      state.prevZoom = action.payload
    },
    toggleFitScreen(state, action) {
      const isOn = action.payload
      const currentZoom = state.prevZoom
      state.fitScreen = isOn
      state.zoom = isOn ? initialState.zoom : currentZoom
    },
    togglePedalModal(state, action) {
      state.pedalModal.pedalName = action.payload
      state.pedalModal.isOpen = !state.pedalModal.isOpen
    },
    closePedalModal(state) {
      state.pedalModal.isOpen = false
    }
  }
})

export const { setZoom, toggleFitScreen, togglePedalModal, closePedalModal } = uiSlice.actions
export default uiSlice.reducer
