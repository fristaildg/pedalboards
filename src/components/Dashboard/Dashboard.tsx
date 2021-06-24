import React from 'react'
import { Heading, Text, Button, Spacer } from '../../common'
import styled from 'styled-components'
import { useBoards } from '../../swr/useFirebase'
import BoardList from '../BoardList'
import { BoardDocument } from '../../common/types'
import { Grid } from '../../common'
import { useGoToBoard } from '../Board'

type DashboardProps = {
  user: Record<string, string>
}

const DashboardWrapper = styled.div`
  padding: 20px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Dashboard = ({ user }: DashboardProps) => {
  const { createBoard } = useBoards()
  const goToBoard = useGoToBoard()
  const { given_name, nickname, sub } = user

  const onCreateClick = async () => {
    try {
      const newBoard = await createBoard({ ownerId: sub, name: 'New Pedalboard', pedals: [] })
      goToBoard(newBoard as BoardDocument)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DashboardWrapper>
      <Grid>  
        <Text>Hello {given_name || nickname}</Text>
        <Header>
          <Heading>My boards</Heading>
          <Button onClick={onCreateClick}>Create pedalboard</Button>
        </Header>
        <Spacer />
        <BoardList />
      </Grid>
    </DashboardWrapper>
  )
}

export default Dashboard
