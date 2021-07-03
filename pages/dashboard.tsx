import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Spinner, Text } from '../src/common'
import DashboardComp from '../src/components/Dashboard'
import withProtectedRoute from '../src/utils/withProtectedRoute'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Dashboard = () => {
  const { user } = useAuth0()
  const { t } = useTranslation('dashboard')

  if (!user) return <Text>{t('loading_user')}...</Text>

  return (
    <DashboardComp user={user} />
  )
}

export const getStaticProps = async ({ locale }: { locale: any }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['dashboard', 'common']))
    }
  }
}

export default withProtectedRoute(Dashboard, Spinner)
