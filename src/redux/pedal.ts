import { createSlice } from '@reduxjs/toolkit'

export type PedalState = {
  pedalModal: {
    pedalName: string | null
    isOpen: boolean
  }
}

const initialState: PedalState = {
  pedalModal: {
    pedalName: null,
    isOpen: false
  }
}

const pedalSlice = createSlice({
  name: 'pedal',
  initialState,
  reducers: {
    togglePedalModal(state, action) {
      state.pedalModal.pedalName = action.payload
      state.pedalModal.isOpen = !state.pedalModal.isOpen
    },
    closePedalModal(state) {
      state.pedalModal.isOpen = false
    }
  }
})

export const { togglePedalModal, closePedalModal } = pedalSlice.actions
export default pedalSlice.reducer
