import React, { useContext } from 'react'
import AudioPlayer from '../AudioPlayer'
import styled from 'styled-components'
import UploadAudioInput from '../UploadAudioInput'
import { useBoard } from '../../swr/useFirebase'
import { COLORS, Heading, Spacer, Text } from '../../common'
import { AudioFileObject } from '../../common/types'
import DeleteAudioModal from '../AudioPlayer/DeleteAudioModal'
import AudioPlayerAlert from '../AudioPlayer/AudioPlayerAlert'
import { useTranslation } from 'next-i18next'

type AudioSamplesProps = {
  boardId?: string
}

export const AudioSamplesWrapper = styled.div`
  padding: 10px 20px;
  border: 1px dashed ${COLORS.GRAY};
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export const AudioPlayerList = styled.ul`
  list-style: none;
`

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`


const AudioSamples = ({ boardId }: AudioSamplesProps) => {
  const { board, loading } = useBoard(boardId)
  const { t } = useTranslation('common')
  
  if (!board && loading) return <Text>{t('audio_samples.loading')}</Text>

  const { audioSamples = [] } = board
  const canUpload = audioSamples && audioSamples.length < 2

  return (
    <AudioSamplesWrapper>
      <div>
        <Heading tag='h2'>{t('audio_samples.heading')}</Heading>
        <Spacer />
        {canUpload && (
          <UploadWrapper>
            <Text>{t('audio_samples.description')}</Text>
            <Spacer />
            <UploadAudioInput />
          </UploadWrapper>
        )}
      </div>
      <AudioPlayerList>
        {audioSamples && audioSamples.length > 0 && audioSamples.map((audio: AudioFileObject, index: number) => (
          <li key={index}>
            <AudioPlayer src={audio.url} name={audio.name} />
            <Spacer />
          </li>
        ))}
        <DeleteAudioModal />
        <AudioPlayerAlert />
      </AudioPlayerList>
    </AudioSamplesWrapper>
  )
}

export default AudioSamples
