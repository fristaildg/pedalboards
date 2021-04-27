import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Spacer } from '../../common'
import styled from 'styled-components'
import { setBoardName } from '../../redux/board'
import { Heading, Input } from '../../common'


type PedalboardNameProps = {
  name: string
}

const EditIcon = styled(Icon)``

const BoardNameWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${EditIcon} {
    opacity: 0;
  }

  &:hover {
    ${EditIcon} {
      opacity: 1;
    }
  }
`

const EditInputWrapper = styled.div`
  display: flex;
  align-items: center;
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
    <EditInputWrapper>
      <Input
        defaultValue={name}
        ref={editInputRef}
      />
      <Spacer />
      <Icon src='./icons/save.svg' onClick={handleSaveClick} />
      <Spacer />
      <Icon src='./icons/close.svg' onClick={toggleIsEditing} />
    </EditInputWrapper>
  )

  return (
    <BoardNameWrapper onClick={toggleIsEditing}>
      <Heading tag="h2">
        {name}
      </Heading>
      <Spacer />
      <EditIcon src='./icons/pencil.svg' />
    </BoardNameWrapper>
  )
}

export default PedalboardName
