import { createSlice } from '@reduxjs/toolkit'
import { Pedal } from '../commonTypes'

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
      const pedalIndex = state.pedals.findIndex(pedal => pedal.Name === action.payload)
      state.pedals.splice(pedalIndex, 1)
    },
    reorderPedals(state, action) {
      state.pedals = action.payload
    },
    setBoardName(state, action) { 
      state.boardName = action.payload
    }
  }
})

export const { addPedal, reorderPedals, removePedal, setBoardName, setBoard } = boardSlice.actions
export default boardSlice.reducer
