import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addSeconds, format } from 'date-fns'
import { COLORS, Icon, SIZES, Slider, SliderValue, Spacer, Text } from '../../common'
import { toggleDeleteAudioModal } from '../../redux/audioPlayer'
import { formatTime, sliderValueToTime, timeToSliderValue } from './AudioPlayer.utils'
import { PageContext } from '../../context/pageContext'

type AudioPlayerProps = {
  src: string
  name: string
}

const StyledPlayer = styled.div`
  height: auto;
  width: 200px;
  border: 1px solid ${COLORS.GRAY};
  color: ${COLORS.WHITE};
  padding: ${SIZES.SPACING}px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const PlayerOptions = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AudioName = styled(Text)`
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const DeleteIconButton = styled(Icon)`
  /* width: 30%; */
`

const PlayerUI = styled.div`
  display: flex;
  align-items: center;
`

const PlayerTimes = styled.div`
  display: flex;
  justify-content: space-between;
`

const AudioPlayer = ({ src, name }: AudioPlayerProps) => {
  const { isPublic } = useContext(PageContext)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const dispatch = useDispatch()

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

  const openDeleteModal = () => {
    dispatch(toggleDeleteAudioModal(name))
  }

  const formattedDuration = useMemo(() => formatTime(duration), [duration])
  const elapsedTime = useMemo(() => format(addSeconds(new Date(0), currentTime), 'mm:ss'), [currentTime])
  const sliderValue = useMemo(() => timeToSliderValue(currentTime, duration), [currentTime, duration]) 
  

  return (
    <StyledPlayer>
      <PlayerOptions>
        <AudioName>{name}</AudioName>
        {!isPublic && (
          <DeleteIconButton
            src='/icons/trash.svg'
            onClick={openDeleteModal}
          />
        )}
      </PlayerOptions>
      <PlayerUI>
        <Icon
          src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'}
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
