import { createSlice } from '@reduxjs/toolkit'

export type UiState = {
  zoom: number
  prevZoom: number
  fitScreen: boolean
}

const initialState: UiState = {
  zoom: 100,
  prevZoom: 100,
  fitScreen: false
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
    }
  }
})

export const { setZoom, toggleFitScreen } = uiSlice.actions
export default uiSlice.reducer
