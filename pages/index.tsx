import React from 'react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from 'next-seo'
import Welcome from '../src/components/Welcome'

const Home = () => {
  return (
    <>
      <NextSeo
        title="Pedalboards"
        openGraph={{
          url: 'https://pedalboards.vercel.app',
          title: 'Welcome to Pedalboards',
          description: 'Arma tu pedalera de guitarra o bajo. Adjunta samples de audio y compartelo con el mundo!',
          images: [
            {
              url: '/hero-image.jpg',
              width: 800,
              height: 600,
              alt: 'Pedalboards'
            }
          ],
          site_name: 'Pedalboards'
        }}
      />
      <Welcome />
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"]))
    }
  }
}

export default Home
