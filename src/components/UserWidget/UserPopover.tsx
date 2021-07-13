import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Children } from '../../common/types'
import { Text, Menu, MenuItem } from '../../common'
import { closeUserPopover } from '../../redux/ui'
import LoginButton from '../LoginButton'
import { userPopoverSelector } from '../../redux/selectors'

type UserPopoverProps = {
  trigger: Children
}

const UserPopover = ({ trigger }: UserPopoverProps) => {
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
    <Menu
      onClickOutside={closePopover}
      visible={isOpen}
      trigger={trigger}
    >
      <MenuItem onClick={goToDashboard}>
        <Text>Dashboard</Text>
      </MenuItem>
      <MenuItem onClick={goToProfile}>
        <Text>Profile</Text>
      </MenuItem>
      <MenuItem>
        <LoginButton />
      </MenuItem>
    </Menu>
  )
}

export default UserPopover
