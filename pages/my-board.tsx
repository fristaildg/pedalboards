import styled from 'styled-components'
import { COLORS, SIZES, Spinner } from '../src/common'
import Board from '../src/components/Board'
import Sidebar from '../src/components/Sidebar'
import { PageContextProvider } from '../src/context/pageContext'
import withProtectedRoute from '../src/utils/withProtectedRoute'

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
`

const StyledSidebar = styled(Sidebar)`
  width: 300px;
  position: sticky;
  top: ${SIZES.HEADER_HEIGHT}px;
`

const StyledBoard = styled(Board)`
  padding: 20px;
  box-sizing: border-box;
  width: calc(100% - 300px);
  border-left: 1px solid ${COLORS.GRAY};
  min-height: ${`calc(100vh - ${SIZES.HEADER_HEIGHT}px)`};
`

const MyBoard = () => {
  return (
    <PageContextProvider value={{ isPublic: false }}>
      <PageWrapper>
        <StyledSidebar />
        <StyledBoard />
      </PageWrapper>
    </PageContextProvider>
  )
}

export default withProtectedRoute(MyBoard, Spinner)
