import React from 'react'
import { Heading, Spacer } from '../../common'
import { AudioFileObject } from '../../common/types'
import AudioPlayer from '../AudioPlayer'
import { AudioSamplesWrapper, AudioPlayerList } from './AudioSamples'

type PublicAudioSamplesProps = {
  samples: AudioFileObject[]
}

const PublicAudioSamples = ({ samples }: PublicAudioSamplesProps) => {
  return (
    <AudioSamplesWrapper>
      <div>
        <Heading tag="h2">Audio Samples</Heading>
      </div>
      <AudioPlayerList>
        {samples && samples.length > 0 && samples.map((audio: AudioFileObject, index: number) => (
            <li key={index}>
              <AudioPlayer src={audio.url} name={audio.name} />
              <Spacer />
            </li>
          ))}
      </AudioPlayerList>
    </AudioSamplesWrapper>
  )
}

export default PublicAudioSamples
