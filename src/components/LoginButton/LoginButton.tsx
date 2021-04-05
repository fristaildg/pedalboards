import React from 'react'
import { Button } from '@spark-digital/ignition'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  return (
    <>
      {isAuthenticated ? (
        <Button label="Logout" onClick={() => logout({ returnTo: window.location.origin })} />
      ) : (
        <Button label="Login" onClick={loginWithRedirect} />
      )}
    </>
  )
}

export default LoginButton
