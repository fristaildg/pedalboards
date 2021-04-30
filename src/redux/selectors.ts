import { BoardState } from './board'
import { UiState } from './ui'

type State = {
  board: BoardState
  ui: UiState
}

export const pedalsSelector = (state: State) => state.board.pedals
export const boardNameSelector = (state: State) => state.board.boardName
export const boardIdSelector = (state: State) => state.board.id
export const zoomSelector = (state: State) => state.ui.zoom
export const fitScreenSelector = (state: State) => state.ui.fitScreen
export const pedalModalSelector = (state: State) => state.ui.pedalModal
