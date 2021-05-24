import { useRouter } from 'next/router'
import styled from 'styled-components'
import { COLORS, SIZES } from '../../src/common'
import { PublicBoard } from '../../src/components/Board'
import ZoomControl from '../../src/components/ZoomControl'
import { PageContextProvider } from '../../src/context/pageContext'

const UserBoardWrapper = styled.div`
  max-width: 1620px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const ZoomControlWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
  border: 1px solid ${COLORS.GRAY};
  align-self: flex-end;
  top: ${SIZES.HEADER_HEIGHT}px;
  position: sticky;
  background-color: ${COLORS.BODY};
`

const UserBoard = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PageContextProvider value={{ isPublic: true }}>
      <UserBoardWrapper>
        <ZoomControlWrapper>
          <ZoomControl />
        </ZoomControlWrapper>
        {id && (
          <PublicBoard boardId={id as string} />
        )}
      </UserBoardWrapper>
    </PageContextProvider>
  )
}



export default UserBoard
