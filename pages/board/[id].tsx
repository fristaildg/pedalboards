import { useRouter } from 'next/router'
import styled from 'styled-components'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
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
  padding: 20px;
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

export const getServerSideProps = async ({ locale }: { locale: any }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["my-board", "common"]))
    }
  }
}

export default UserBoard
