import { useRouter } from 'next/router'
import { PublicBoard } from '../../src/components/Board'
import styled from 'styled-components'

const UserBoardWrapper = styled.div`
  max-width: 1620px;
  margin: 0 auto;
`

const UserBoard = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null

  return (
    <UserBoardWrapper>
      <PublicBoard boardId={id as string} />
    </UserBoardWrapper>
  )
}

export default UserBoard
