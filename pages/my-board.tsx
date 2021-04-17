import styled from 'styled-components'
import Board from '../src/components/Board'
import Sidebar from '../src/components/Sidebar'

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
`

const StyledSidebar = styled(Sidebar)`
  width: 300px;
`

const StyledBoard = styled(Board)`
  padding: 20px;
  box-sizing: border-box;
  width: calc(100% - 300px);
`

const MyBoard = () => (
  <PageWrapper>
    <StyledSidebar />
    <StyledBoard />
  </PageWrapper>
)

export default MyBoard
