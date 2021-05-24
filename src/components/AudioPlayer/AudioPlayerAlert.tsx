import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from '../../common'
import { audioPlayerAlertSelector } from '../../redux/selectors'
import { toggleAlert } from '../../redux/audioPlayer'

const AudioPlayerAlert = () => {
  const { isOpen, message } = useSelector(audioPlayerAlertSelector)
  const dispatch = useDispatch()

  const handleTimeout = () => {
    dispatch(toggleAlert())
  }

  return (
    <Alert isOpen={isOpen} message={message} onTimeout={handleTimeout} />
  )
}

export default AudioPlayerAlert
