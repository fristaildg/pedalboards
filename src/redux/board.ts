import { createSlice } from '@reduxjs/toolkit'
import { uniqueId } from 'lodash'
import { Pedal } from '../common/types'

export type BoardState = {
  id: string | null
  pedals: Pedal[]
  boardName: string
  deleteBoardModal: {
    isOpen: boolean
    boardId: string | null
  }
}

const initialState: BoardState = {
  id: null,
  boardName: 'My Pedalboard',
  pedals: [],
  deleteBoardModal: {
    isOpen: false,
    boardId: null
  },
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, action) {
      state.id = action.payload.NO_ID_FIELD || action.payload.id
      state.boardName = action.payload.name || initialState.boardName
      state.pedals = action.payload.pedals || []
    },
    addPedal(state, action) {
      const newPedal = { ...action.payload, id: `${uniqueId(action.payload.Name)}` }
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
      const currentPedal = action.payload.pedalId
      const knobs = action.payload.knobs
      const pedalIndex = getPedalIndex(state, currentPedal)

      state.pedals[pedalIndex].knobs = knobs
    },
    toggleDeleteBoardModal(state, action) {
      state.deleteBoardModal.isOpen = !state.deleteBoardModal.isOpen
      state.deleteBoardModal.boardId = action.payload
    },
    closeDeleteBoardModal(state) {
      state.deleteBoardModal.isOpen = false
      state.deleteBoardModal.boardId = null
    }
  }
})

const getPedalIndex = (state: BoardState, pedalId: string) => state.pedals.findIndex((pedal: Pedal) => pedal.id === pedalId)

export const {
  addPedal,
  reorderPedals,
  removePedal,
  setBoardName,
  setBoard,
  addPedalKnobs,
  toggleDeleteBoardModal,
  closeDeleteBoardModal,
} = boardSlice.actions
export default boardSlice.reducer
