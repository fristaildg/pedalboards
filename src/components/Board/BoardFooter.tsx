import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Spacer, Alert } from '../../common'
import CopyBoardLink from './CopyBoardLink'
import DeleteBoardModal from '../DeleteBoardModal'
import { useSelector, useDispatch } from 'react-redux'
import { boardIdSelector, boardNameSelector, pedalsSelector } from '../../redux/selectors'
import { useBoard } from '../../swr/useFirebase'
import { toggleDeleteBoardModal } from '../../redux/board'
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-start;
`

const DeleteButton = styled(Button)`
  margin-left: auto;
`

const BoardFooter = () => {
  const dispatch = useDispatch()
  const boardId = useSelector(boardIdSelector)
  const pedals = useSelector(pedalsSelector)
  const boardName = useSelector(boardNameSelector)
  const [saving, setSaving] = useState(false)
  const { updateBoard } = useBoard()
  const [alertVisible, setAlertVisible] = useState(false)
  const router = useRouter()
  const { t } = useTranslation('my-board')

  const handleSaveClick = async () => {
    setSaving(true)
    await updateBoard({ name: boardName, pedals })
    setSaving(false)
    setAlertVisible(true)
  }

  const handleDeleteClick = () => {
    dispatch(toggleDeleteBoardModal(boardId))
  }

  const handleOnDeleted = () => {
    router.push('/dashboard')
  }
  
  return (
    <>
      <StyledFooter>
        <Button
          onClick={handleSaveClick}
          isDisabled={saving}
        >
          {saving ? t('saving') : t('save_pedalboard')}
        </Button>
        <Spacer />
        <CopyBoardLink boardId={boardId} />
        <DeleteButton
          intent="danger"
          onClick={handleDeleteClick}
        >
          {t('delete_pedalboard')}
        </DeleteButton>
      </StyledFooter>
      <Alert
        isOpen={alertVisible}
        onTimeout={() => setAlertVisible(false)} 
        message={t('pedalboard_saved')}
      />
      <DeleteBoardModal onDeleted={handleOnDeleted} />
    </>
  )
}

export default BoardFooter
