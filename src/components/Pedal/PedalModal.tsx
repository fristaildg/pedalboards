import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, ModalHeader, ModalBody, Heading, Text, Input, Spacer, Button, Alert, SubHeading } from '../../common'
import PedalKnob from './PedalKnob'
import { useKnobs } from './Pedal.utils'
import { pedalModalSelector } from '../../redux/selectors'
import { closePedalModal } from '../../redux/ui'
import { Pedal } from '../../common/types'

type PedalModalProps = {
  pedal: Pedal
}

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
`

const AddKnobInput = styled(Input)`
  margin: 0 auto;
`

const KnobGroup = styled.div`
  display: flex;
  align-items: center;
`

const EmptyKnobsContainer = styled(() => (
  <>
    <PedalKnob isDisabled label="pedal knob" />
    <Spacer />
    <div>
      <SubHeading>Add some knobs!</SubHeading>
      <Spacer />
      <Text>Add knobs like this one with a name and a value (1 - 10) to show how your pedal is configured</Text>
    </div>
  </>
))``

const PedalModal = ({ pedal }: PedalModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { isOpen, pedalName } = useSelector(pedalModalSelector)
  const dispatch = useDispatch()
  const { knobs, addKnob, removeKnob, saveKnobs, updateKnobValue } = useKnobs(pedal)
  const [alertVisible, setAlertVisible] = useState(false)

  const handleAddKnobClick = () => {
    if (inputRef.current) {
      addKnob(inputRef.current.value)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  const handleRemoveClick = (knob: string) => {
    removeKnob(knob)
  }

  const handleCloseClick = () => {
    saveKnobs()
    dispatch(closePedalModal())
  }

  const handleKnobChange = (knob: string, value: number) => {
    updateKnobValue(knob, value)
  }

  return (
    <Modal isOpen={isOpen && pedal.Name === pedalName} onCloseClick={handleCloseClick}>
      <StyledModalHeader>
        <div>
          <Heading>{pedal?.Name}</Heading>
          <Text>{pedal?.Brand}</Text>
        </div>
        <AddKnobInput
          placeholder="Volume, gain, treble, etc..."
          label="Add a knob"
          ref={inputRef}
        />
        <Button onClick={handleAddKnobClick}>Add knob</Button>
      </StyledModalHeader>
      <ModalBody>
        <KnobGroup>
          {Object.keys(knobs).length > 0 ? Object.keys(knobs).map(knob => (
            <React.Fragment key={knob}>
              <PedalKnob
                label={knob}
                defaultValue={knobs[knob]}
                onRemoveClick={() => handleRemoveClick(knob)}
                onChange={handleKnobChange}
              />
              <Spacer />
            </React.Fragment>
          )) : (
            <EmptyKnobsContainer />
          )}
        </KnobGroup>
      </ModalBody>
      <Alert isOpen={alertVisible} onTimeout={() => setAlertVisible(false)} message="Knobs saved!" />
    </Modal>
  )
}

export default styled(PedalModal)``
