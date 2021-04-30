import { createSlice } from '@reduxjs/toolkit'
import { Pedal } from '../common/types'

export type BoardState = {
  id: string | null
  pedals: Pedal[]
  boardName: string
}

const initialState: BoardState = {
  id: null,
  boardName: 'My Pedalboard',
  pedals: [],
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, action) {
      state.id = action.payload.NO_ID_FIELD
      state.boardName = action.payload.name || initialState.boardName
      state.pedals = action.payload.pedals || []
    },
    addPedal(state, action) {
      const newPedal = { ...action.payload, id: action.payload.Name }
      state.pedals.push(newPedal)
    },
    removePedal(state, action) {
      const pedalIndex = getPedalIndex(state, action.payload)
      state.pedals.splice(pedalIndex, 1)
    },
    reorderPedals(state, action) {
      state.pedals = action.payload
    },
    setBoardName(state, action) { 
      state.boardName = action.payload
    },
    addPedalKnobs(state, action) {
      const currentPedal = action.payload.pedalName
      const knobs = action.payload.knobs
      const pedalIndex = getPedalIndex(state, currentPedal)

      state.pedals[pedalIndex].knobs = knobs
    },
    addPedalKnob(state, action) {
      const currentPedal = action.payload.pedalName
      const pedalIndex = getPedalIndex(state, currentPedal)
      let knobs = state.pedals[pedalIndex].knobs
      const knob = action.payload.knob

      state.pedals[pedalIndex].knobs = {...knobs, knob}
    }
  }
})

const getPedalIndex = (state: BoardState, pedalName: string) => state.pedals.findIndex((pedal: Pedal) => pedal.Name === pedalName)

export const {
  addPedal,
  reorderPedals,
  removePedal,
  setBoardName,
  setBoard,
  addPedalKnobs,
  addPedalKnob
} = boardSlice.actions
export default boardSlice.reducer
