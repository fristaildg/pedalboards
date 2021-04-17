import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Welcome from './Welcome'

const Home = () => {
  const { user } = useAuth0()
  
  return (
    <>
      {/* <Header />    */}
      {!!user ? (
        <Dashboard user={user} />
      ) : (
        <Welcome />
      )} 
    </>
  )  
}

export default Home
