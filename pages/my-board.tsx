import styled from 'styled-components'
import { COLORS, SIZES } from '../src/common'
import Board from '../src/components/Board'
import Sidebar from '../src/components/Sidebar'

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
  height: 100%;
`

const MyBoard = () => (
  <PageWrapper>
    <StyledSidebar />
    <StyledBoard />
  </PageWrapper>
)

export default MyBoard
