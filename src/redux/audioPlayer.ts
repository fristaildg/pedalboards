import { createSlice } from '@reduxjs/toolkit'

export type AudioPlayerState = {
  deleteAudioModal: {
    isOpen: boolean,
    name?: string
  },
  alert: {
    isOpen: boolean,
    message: string
  }
}

const initialState: AudioPlayerState = {
  deleteAudioModal: {
    isOpen: false,
    name: undefined
  },
  alert: {
    isOpen: false,
    message: ''
  }
}

const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    toggleDeleteAudioModal(state, action) {
      state.deleteAudioModal.isOpen = !state.deleteAudioModal.isOpen
      state.deleteAudioModal.name = action.payload
    },
    toggleAlert(state) {
      state.alert.isOpen = !state.alert.isOpen
    },
    setAlertMessage(state, action) {
      const messages: {[key: string]: string} = {
        succeeded: 'File deleted successfully',
        errored: 'There was an error trying to delete the file'
      }

      state.alert.message = messages[action.payload]
    }
  }
})

export const { toggleDeleteAudioModal, toggleAlert, setAlertMessage } = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
