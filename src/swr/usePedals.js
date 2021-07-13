import { useMemo } from 'react'
import useSWR from 'swr'
import fetcher from '../swr/fetcher'

export const usePedals = () => {
  const { data: pedals, error } = useSWR('/api/pedals', fetcher)

  const loading = useMemo(() => !pedals && !error, [pedals, error])

  return {
    pedals,
    error,
    loading
  }
}
