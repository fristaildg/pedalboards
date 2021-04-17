import React from 'react'
// import { Button } from '@spark-digital/ignition'
import { Button } from '../../common'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  return (
    <>
      {isAuthenticated ? (
        <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
      ) : (
        <Button onClick={loginWithRedirect}>Login</Button>
      )}
    </>
  )
}

export default LoginButton
