import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TextInput, IconButton } from '@spark-digital/ignition'
import styled from 'styled-components'
import { setBoardName } from '../../redux/board'
import { Heading } from '../../common'


type PedalboardNameProps = {
  name: string
}

const StyledIconButton = styled(IconButton)``

const BoardNameWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledIconButton} {
    opacity: 0;
  }

  &:hover {
    ${StyledIconButton} {
      opacity: 1;
    }
  }
`

const PedalboardName = ({ name }: PedalboardNameProps) => {
  const dispatch = useDispatch()
  const [ isEditing, setIsEditing ] = useState(false)
  const editInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus()
    }
  }, [isEditing])

  const toggleIsEditing = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleSaveClick = () => {
    dispatch(setBoardName(editInputRef.current?.value))
    setIsEditing(false)
  }

  if (isEditing) return (
    <div>
      <TextInput
        placeholder={name}
        ref={editInputRef}
      />
      <IconButton icon="save" onClick={handleSaveClick} />
      <IconButton icon="times" onClick={toggleIsEditing} />
    </div>
  )

  return (
    <BoardNameWrapper>
      <Heading tag="h2">
        {name}
      </Heading>
      <IconButton icon="edit" onClick={toggleIsEditing} />
    </BoardNameWrapper>
  )
}

export default PedalboardName
