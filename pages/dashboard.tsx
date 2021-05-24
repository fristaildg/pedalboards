import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Text } from '../src/common'
import DashboardComp from '../src/components/Dashboard'
import withProtectedRoute from '../src/utils/withProtectedRoute'

const Dashboard = () => {
  const { user } = useAuth0()

  if (!user) return <Text>Loading user...</Text>

  return (
    <DashboardComp user={user} />
  )
}

export default withProtectedRoute(Dashboard)
