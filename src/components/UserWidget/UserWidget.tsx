import React from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import { COLORS, Spacer, Spinner, Text } from '../../common'
import LoginButton from '../LoginButton'
import UserPopover from './UserPopover'
import { toggleUserPopover } from '../../redux/ui'

const UserWidgetWrapper = styled.div`
  padding: 20px;
`

const User = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const UserName = styled(Text)`
  color: ${COLORS.WHITE};
`

const UserWidget = () => {
  const { user, isLoading } = useAuth0()
  const dispatch = useDispatch()

  const togglePopover = () => {
    dispatch(toggleUserPopover())
  }

  return (
    <UserWidgetWrapper>
      {isLoading && <Spinner />}
      {!isLoading && !user && <LoginButton />}
      {user && (
        <UserPopover>
          <User onClick={togglePopover}>
            <Avatar src={user.picture} />
            <Spacer />
            <UserName>{user.nickname}</UserName>
          </User>
        </UserPopover>
      )}
    </UserWidgetWrapper>
  )
}

export default UserWidget

