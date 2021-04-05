import React from 'react'
import { Heading } from '@spark-digital/ignition'
import AudioPlayer from 'react-audio-player'
import styled from 'styled-components'
import { Text } from '@spark-digital/ignition'
import UploadAudioInput from '../UploadAudioInput'
import { useBoard } from '../../swr/useFirebase'

type AudioSamplesProps = {
  uploader?: boolean
  boardId?: string
}

const AudioSamplesWrapper = styled.div`
  padding: 10px 20px;
  background-color: lightgray;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const AudioPlayerList = styled.ul`
  list-style: none;
`

const AudioSamples = ({ uploader = true, boardId }: AudioSamplesProps) => {
  const { board, loading } = useBoard(boardId)
  
  if (!board && loading) return <Text>Loading audio samples...</Text>
  const { audioSamples } = board

  return (
    <AudioSamplesWrapper>
      <div>
        <Heading level={2}>Audio Samples</Heading>
        {uploader && <UploadAudioInput />}
      </div>
      <div>
        <AudioPlayerList>
          {audioSamples && audioSamples.length > 0 && audioSamples.map((audio: string, index: number) => (
            <li key={index}>
              <AudioPlayer controls src={audio} />
            </li>
          ))}
        </AudioPlayerList>
      </div>
    </AudioSamplesWrapper>
  )
}

export default AudioSamples
