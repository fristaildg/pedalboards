import React, { useContext } from 'react'
import { PageContext } from '../../context/pageContext'
import AudioPlayer from '../AudioPlayer'
import styled from 'styled-components'
import UploadAudioInput from '../UploadAudioInput'
import { useBoard } from '../../swr/useFirebase'
import { COLORS, Heading, Spacer, Text } from '../../common'

type AudioSamplesProps = {
  boardId?: string
}

const AudioSamplesWrapper = styled.div`
  padding: 10px 20px;
  border: 1px dashed ${COLORS.GRAY};
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AudioPlayerList = styled.ul`
  list-style: none;
`

const AudioSamples = ({ boardId }: AudioSamplesProps) => {
  const { board, loading } = useBoard(boardId)
  const { isPublic } = useContext(PageContext)
  
  if (!board && loading) return <Text>Loading audio samples...</Text>
  const { audioSamples } = board

  return (
    <AudioSamplesWrapper>
      <div>
        <Heading tag='h2'>Audio Samples</Heading>
        <Spacer />
        <UploadWrapper>
          {!isPublic && <Text>Upload up to 2 audio files (5MB max)</Text>}
          <Spacer />
          {!isPublic && <UploadAudioInput />}
        </UploadWrapper>
      </div>
      <AudioPlayerList>
        {audioSamples && audioSamples.length > 0 && audioSamples.map((audio: string, index: number) => (
          <li key={index}>
            <AudioPlayer src={audio} />
            <Spacer />
          </li>
        ))}
      </AudioPlayerList>
    </AudioSamplesWrapper>
  )
}

export default AudioSamples
