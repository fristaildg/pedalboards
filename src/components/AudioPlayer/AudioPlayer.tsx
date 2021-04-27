import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { COLORS, Icon, SIZES, Slider, SliderValue, Spacer, Text } from '../../common'
import { addSeconds, format } from 'date-fns'
import { formatTime, sliderValueToTime, timeToSliderValue } from './AudioPlayer.utils'

type AudioPlayerProps = {
  src: string
}

const StyledPlayer = styled.div`
  height: ${SIZES.HEADER_HEIGHT}px;
  width: 200px;
  border: 1px solid ${COLORS.GRAY};
  color: ${COLORS.WHITE};
  padding: ${SIZES.SPACING}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PlayerUI = styled.div`
  display: flex;
  align-items: center;
`

const PlayerTimes = styled.div`
  display: flex;
  justify-content: space-between;
`

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const playerRef = useRef<HTMLAudioElement>(null)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        intervalRef.current = window.setInterval(() => {
          setCurrentTime(playerRef?.current?.currentTime || 0)
        }, 1000)
      }

      if (!isPlaying) clearInterval(intervalRef.current!)
    }
  }, [isPlaying])

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.onloadedmetadata = () => setDuration(playerRef?.current?.duration || 0)
      playerRef.current.onended = () => {
        setIsPlaying(false)
        setCurrentTime(0)
      }
    }
  }, [])
  
  const toggleAudio = () => {
    if (playerRef.current) {
      playerRef.current.currentTime = currentTime
      !isPlaying ? playerRef.current.play() : playerRef.current.pause()
      setIsPlaying(isPlaying => !isPlaying)
    }
  }

  const handleManualTimeChange = (event: SliderValue) => {
    setCurrentTime(sliderValueToTime(event as number, duration) || currentTime)
  }

  const formattedDuration = useMemo(() => formatTime(duration), [duration])
  const elapsedTime = useMemo(() => format(addSeconds(new Date(0), currentTime), 'mm:ss'), [currentTime])
  const sliderValue = useMemo(() => timeToSliderValue(currentTime, duration), [currentTime, duration]) 
  

  return (
    <StyledPlayer>
      <PlayerUI>
        <Icon
          src={isPlaying ? './icons/pause.svg' : './icons/play.svg'}
          onClick={toggleAudio}
        />
        <Spacer />
        <Slider
          value={sliderValue}
          onAfterChange={handleManualTimeChange}
          disabled={isPlaying}
        />
      </PlayerUI>
      <PlayerTimes>
        <Text>{elapsedTime}</Text>
        <Text>{formattedDuration}</Text>
      </PlayerTimes>
      <audio src={src} ref={playerRef} preload="metadata" />
    </StyledPlayer>
  )
}

export default AudioPlayer
