import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import { COLORS, Spacer, Text } from '../../common'
import LoginButton from '../LoginButton'
import UserPopover from './UserPopover'

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
  const [popoverVisible, setpopoverVisible] = useState(false)

  const togglePopover = () => {
    setpopoverVisible(prevState => !prevState)
  }

  const closePopover = () => {
    if (popoverVisible) setpopoverVisible(false)
  }

  return (
    <UserWidgetWrapper>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && !user && <LoginButton />}
      {user && (
        <UserPopover
          visible={popoverVisible}
          onClickOutside={closePopover}  
        >
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

