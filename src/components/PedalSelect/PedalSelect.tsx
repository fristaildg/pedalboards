import React from 'react'
import { Select } from '../../common'
import { usePedals } from '../../swr/usePedals'
import { Pedal } from '../../common/types'
import { useDispatch } from 'react-redux'
import { addPedal } from '../../redux/board'
import { useTranslation } from 'next-i18next'

type PedalOption = {
  value: string
  label: string
}

const PedalSelect = () => {
  const { pedals, loading } = usePedals()
  const dispatch = useDispatch()
  const { t } = useTranslation('my-board')
  
  const pedalOptions = pedals && pedals.map((pedal: Pedal) => ({ value: pedal.Name, label: pedal.Name }))

  const getPedal = (selectedPedal: PedalOption) => {
    const pedal = pedals.find((pedal: Pedal) => pedal.Name === selectedPedal.value)
    dispatch(addPedal(pedal))
  }

  return (
    <Select
      label={t('sidebar.choose_pedal')}
      options={pedalOptions}
      onChange={(event: PedalOption) => getPedal(event)}
      isLoading={loading}
    />
  )
}

export default PedalSelect
