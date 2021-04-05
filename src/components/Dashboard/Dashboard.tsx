import React from 'react'
import { Heading, Text, Button } from '@spark-digital/ignition'
import styled from 'styled-components'
import { useBoards } from '../../swr/useFirebase'
import BoardList from '../BoardList'
import { BoardDocument } from '../../commonTypes'

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
  const { boards, loading, createBoard } = useBoards()
  const { given_name, nickname, sub } = user

  const onCreateClick = async () => {
    try {
      const newBoard = await createBoard({ ownerId: sub, name: 'New Pedalboard', pedals: [] })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DashboardWrapper>
      <Text>Hello {given_name || nickname}</Text>
      <Header>
        <Heading level={2}>My boards</Heading>
        <Button label="Create pedalboard" onClick={onCreateClick} />
      </Header>
      {loading && <Text>Loading boards</Text>}
      {boards && boards.length > 0 && (
        <BoardList boards={boards as BoardDocument[]} />
      )}
    </DashboardWrapper>
  )
}

export default Dashboard
