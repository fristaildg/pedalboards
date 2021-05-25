import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { addPedalKnobs } from '../../redux/board'
import { Pedal, PedalKnobs } from '../../common/types'

const knobsReducer = (state: { knobs: PedalKnobs }, action: any) => {
  switch (action.type) {
    case 'addKnob':
      return { knobs: {...state.knobs, ...action.payload} }
    case 'updateKnobValue':
      return { knobs: {...state.knobs, ...action.payload} }
    case 'removeKnob':
      const knobToRemove = action.payload
      const newKnobs = {...state.knobs}
      delete newKnobs[knobToRemove]
      return { knobs: newKnobs }
    default: 
      return state
  }
}

export const useKnobs = (pedal: Pedal) => {
  // @ts-ignore
  const [{ knobs }, dispatch] = useReducer(knobsReducer, { knobs: pedal.knobs || {} })
  const storeDispatch = useDispatch()

  const addKnob = (knob: string) => {
    dispatch({
      type: 'addKnob',
      payload: {
        [knob]: 0
      }
    })
  }

  const updateKnobValue = (knob: string, value: number) => {
    dispatch({
      type: 'updateKnobValue',
      payload: {
        [knob]: value
      }
    })
  }

  const removeKnob = (knob: string) => {
    dispatch({
      type: 'removeKnob',
      payload: knob
    })
  }

  const saveKnobs = () => {
    storeDispatch(addPedalKnobs({ knobs, pedalId: pedal.id }))
  }

  return {
    knobs,
    addKnob,
    updateKnobValue,
    removeKnob,
    saveKnobs
  }
}
