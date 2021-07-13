import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, MenuItem, Button, Text } from '../../common'

const LangWidget = () => {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  const togglePopover = () => {
    setVisible(prevState => !prevState)
  }
  const closePopover = () => {
    setVisible(false)
  }

  console.log(router)

  return (
    <Menu
      visible={visible}
      onClickOutside={closePopover}
      trigger={(
        <Button
          variant="text"
          onClick={togglePopover}
        > 
          {router.locale}
        </Button>
      )}
    >
      <MenuItem>
        <Link href={router.pathname} locale='es' as={Text}>Español</Link>
      </MenuItem>
      <MenuItem>
        <Link href={router.pathname} locale='en' as={Text}>English</Link>
      </MenuItem>
    </Menu>
  )
}

export default LangWidget
