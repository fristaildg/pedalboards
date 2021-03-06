import React from 'react'

export type PedalKnobs = {
  [key: string]: number
}

export type Pedal = {
  Brand: string
  Height: number
  Image: string
  Name: string
  Width: number
  knobs?: PedalKnobs
  id: string
}

export type BoardDocument = {
  NO_ID_FIELD?: string
  name?: string
  pedals?: Pedal[]
  audioSamples?: AudioFileObject[]
}

export type Children = React.ReactNode | React.ReactNode[] | undefined
export type OnClick = (event?: any) => void

export type AudioFileObject = {
  name: string
  url: string
}
