import { createSlice } from '@reduxjs/toolkit'

export type UiState = {
  zoom: number
  prevZoom: number
  fitScreen: boolean
  userPopover: {
    isOpen: boolean
  }
}

const initialState: UiState = {
  zoom: 100,
  prevZoom: 100,
  fitScreen: false,
  userPopover: {
    isOpen: false,
  },
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
    toggleUserPopover(state) {
      state.userPopover.isOpen = !state.userPopover.isOpen
    },
    closeUserPopover(state) {
      state.userPopover.isOpen = false
    }
  }
})

export const { setZoom, toggleFitScreen, toggleUserPopover, closeUserPopover } = uiSlice.actions
export default uiSlice.reducer
