import React from 'react'
import { useRouter } from 'next/router'
import { Children } from '../../common/types'
import { COLORS, Popover, Text } from '../../common'
import styled from 'styled-components'
import LoginButton from '../LoginButton'

type UserPopoverProps = {
  children: Children
  visible: boolean
  onClickOutside: () => void
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

const UserPopover = ({ children, visible, onClickOutside }: UserPopoverProps) => {
  const { push } = useRouter()

  const goToProfile = () => {
    push('/user')
  }

  return (
    <StyledPopover
      onClickOutside={onClickOutside}
      visible={visible}
      content={(
        <PopoverContent>
          <PopoverItem onClick={goToProfile}>
            <Text>Go to profile</Text>
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
