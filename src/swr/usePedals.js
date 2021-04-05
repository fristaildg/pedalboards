import { useMemo } from 'react'
import useSWR from 'swr'
import fetcher from '../swr/fetcher'

export const usePedals = () => {
  const { data: pedals, error } = useSWR('https://www.pedalplayground.com/public/data/pedals.json', fetcher)

  const loading = useMemo(() => !pedals && !error, [pedals, error])

  return {
    pedals,
    error,
    loading
  }
}
