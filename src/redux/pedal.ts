import { createSlice } from '@reduxjs/toolkit'

export type PedalState = {
  pedalModal: {
    pedalName: string | null
    pedalId: string | null
    isOpen: boolean
  }
}

const initialState: PedalState = {
  pedalModal: {
    pedalName: null,
    pedalId: null,
    isOpen: false
  }
}

const pedalSlice = createSlice({
  name: 'pedal',
  initialState,
  reducers: {
    togglePedalModal(state, action) {
      state.pedalModal.pedalName = action.payload.pedalName
      state.pedalModal.pedalId = action.payload.pedalId
      state.pedalModal.isOpen = !state.pedalModal.isOpen
    },
    closePedalModal(state) {
      state.pedalModal.isOpen = false
    }
  }
})

export const { togglePedalModal, closePedalModal } = pedalSlice.actions
export default pedalSlice.reducer
