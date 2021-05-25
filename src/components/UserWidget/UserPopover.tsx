import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Children } from '../../common/types'
import { COLORS, Popover, Text } from '../../common'
import { closeUserPopover } from '../../redux/ui'
import styled from 'styled-components'
import LoginButton from '../LoginButton'
import { userPopoverSelector } from '../../redux/selectors'

type UserPopoverProps = {
  children: Children
}

const StyledPopover = styled(Popover)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 20px;
`

const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.WHITE};
`

const PopoverItem = styled.div`
  cursor: pointer;
  padding: 20px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: ${COLORS.BODY_HOVER};
  }
`

const UserPopover = ({ children }: UserPopoverProps) => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { isOpen } = useSelector(userPopoverSelector)

  const closePopover = () => {
    dispatch(closeUserPopover())
  }

  const goToProfile = () => {
    closePopover()
    push('/user')
  }

  const goToDashboard = () => {
    closePopover()
    push('/dashboard')
  }

  return (
    <StyledPopover
      onClickOutside={closePopover}
      visible={isOpen}
      content={(
        <PopoverContent>
          <PopoverItem onClick={goToDashboard}>
            <Text>Dashboard</Text>
          </PopoverItem>
          <PopoverItem onClick={goToProfile}>
            <Text>Profile</Text>
          </PopoverItem>
          <PopoverItem>
            <LoginButton />
          </PopoverItem>
        </PopoverContent>
      )}>
      {children}
    </StyledPopover>
  )
}

export default UserPopover
