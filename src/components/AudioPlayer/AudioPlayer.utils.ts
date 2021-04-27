import { addSeconds, format } from 'date-fns'

export const formatTime = (timeInSeconds: number) => {
  return format(addSeconds(new Date(0), timeInSeconds), 'mm:ss')
}

export const timeToSliderValue = (currentTime: number | undefined, duration: number | undefined) => {
  return currentTime && duration && (currentTime * 100) / duration
}

export const sliderValueToTime = (value: number, duration: number | undefined) => {
  return value && duration && (value * duration) / 100
}
