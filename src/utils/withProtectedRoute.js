import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const withProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated, isLoading } = useAuth0()
    const { push } = useRouter()

    useEffect(() => {
      console.log(isLoading, isAuthenticated)
      if (!isLoading && !isAuthenticated) push('/')
    }, [isAuthenticated, isLoading])

    if (isLoading) return <p>Loading...</p>

    if (!isLoading && !isAuthenticated) return <p>Not logged in. Redirecting...</p>

    return <WrappedComponent {...props} />
  }
}

export default withProtectedRoute
