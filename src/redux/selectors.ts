import { AudioPlayerState } from './audioPlayer'
import { BoardState } from './board'
import { PedalState } from './pedal'
import { UiState } from './ui'

type State = {
  board: BoardState
  ui: UiState
  pedal: PedalState
  audioPlayer: AudioPlayerState
}

export const pedalsSelector = (state: State) => state.board.pedals
export const boardNameSelector = (state: State) => state.board.boardName
export const boardIdSelector = (state: State) => state.board.id
export const zoomSelector = (state: State) => state.ui.zoom
export const fitScreenSelector = (state: State) => state.ui.fitScreen
export const pedalModalSelector = (state: State) => state.pedal.pedalModal
export const deleteAudioModalSelector = (state: State) => state.audioPlayer.deleteAudioModal
export const audioPlayerAlertSelector = (state: State) => state.audioPlayer.alert
