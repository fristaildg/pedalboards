import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from '../Dashboard'
import Welcome from './Welcome'

const Home = () => {
  const { user } = useAuth0()
  
  return (
    <>
      {!!user ? (
        <Dashboard user={user} />
      ) : (
        <Welcome />
      )} 
    </>
  )  
}

export default Home
