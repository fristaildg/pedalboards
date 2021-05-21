import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '../../common'
import { audioPlayerAlertSelector } from '../../redux/selectors'

const AudioPlayerAlert = () => {
  const { isOpen, message } = useSelector(audioPlayerAlertSelector)

  return (
    <Alert isOpen={isOpen} message={message} />
  )
}

export default AudioPlayerAlert
