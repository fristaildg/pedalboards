import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, Icon, SIZES, Text, Alert } from '../../common'

type CopyBoardLinkProps = {
  boardId: string | null
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${COLORS.GRAY};
`

const Link = styled(Text)`
  padding: ${SIZES.SPACING}px;
`

const CopyButton = styled.div`
  padding: ${SIZES.SPACING}px;
  border-left: 1px solid ${COLORS.GRAY};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover { 
    background-color: ${COLORS.BODY_HOVER};
  }
`

const CopyBoardLink = ({ boardId }: CopyBoardLinkProps) => {
  const [showAlert, setShowAlert] = useState(false)
  const url = process.env.NODE_ENV === 'production' ? 'https://pedalboards-fristaildg.vercel.app' : 'http://localhost:3000'
  const boardLink = `${url}/board/${boardId}`
  
  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(boardLink)
      setShowAlert(true)
    }
  }
  
  const handleAlertTimeout = () => {
    setShowAlert(false)
  } 
  
  if (!boardId) return null

  return (
    <Wrapper>
      <Link>{boardLink}</Link>
      <CopyButton onClick={handleCopyClick}>
        <Icon icon="copy" />
        <Text>Copy Link</Text>
      </CopyButton>
      <Alert isOpen={showAlert} onTimeout={handleAlertTimeout} message="Link copied!" />
    </Wrapper>
  )
}

export default CopyBoardLink
