import React, { useRef, useState, useContext } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { PageContext } from '../../context/pageContext'
import { Modal, ModalHeader, ModalBody, Heading, Text, Input, Spacer, Button, Alert, SubHeading, COLORS } from '../../common'
import PedalKnob from './PedalKnob'
import { useKnobs } from './Pedal.utils'
import { pedalModalSelector } from '../../redux/selectors'
import { closePedalModal } from '../../redux/pedal'
import { Pedal } from '../../common/types'

type PedalModalProps = {
  pedal: Pedal
}

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  padding: 0;
`

const HeaderInfo = styled.div`
  padding: 20px;
  border-right: 1px solid ${COLORS.GRAY};
`

const AddKnob = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
`

const AddKnobInput = styled(Input)`
  /* margin: 0 auto; */
`

const KnobGroup = styled.div`
  display: flex;
  align-items: center;
`

const EmptyKnobsContainer = styled(({ isPublic }) => (
  !isPublic ? (
    <>
      <PedalKnob isDisabled label="pedal knob" />
      <Spacer />
      <div>
        <SubHeading>Add some knobs!</SubHeading>
        <Spacer />
        <Text>Add knobs like this one with a name and a value (1 - 10) to show how your pedal is configured</Text>
      </div>
    </>
  ) : (
    <Text>No knobs have been added to this pedal yet</Text>
  )
))``

const PedalModal = ({ pedal }: PedalModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { isOpen, pedalName } = useSelector(pedalModalSelector)
  const dispatch = useDispatch()
  const { knobs, addKnob, removeKnob, saveKnobs, updateKnobValue } = useKnobs(pedal)
  const [alertVisible, setAlertVisible] = useState(false)
  const { isPublic } = useContext(PageContext)

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
    if(!isPublic) saveKnobs()
    dispatch(closePedalModal())
  }

  const handleKnobChange = (knob: string, value: number) => {
    updateKnobValue(knob, value)
  }

  return (
    <Modal isOpen={isOpen && pedal.Name === pedalName} onCloseClick={handleCloseClick}>
      <StyledModalHeader>
        <HeaderInfo>
          <Heading>{pedal?.Name}</Heading>
          <Text>{pedal?.Brand}</Text>
        </HeaderInfo>
        {!isPublic && (
          <AddKnob>
            <AddKnobInput
              placeholder="Volume, gain, treble, etc..."
              label="Add a knob"
              ref={inputRef}
            />
            <Spacer />
            <Button onClick={handleAddKnobClick}>Add knob</Button>
          </AddKnob>
        )}
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
            <EmptyKnobsContainer isPublic={isPublic} />
          )}
        </KnobGroup>
      </ModalBody>
      <Alert isOpen={alertVisible} onTimeout={() => setAlertVisible(false)} message="Knobs saved!" />
    </Modal>
  )
}

export default styled(PedalModal)``
