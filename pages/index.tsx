import React from 'react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Welcome from '../src/components/Welcome'

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>Pedalboards</title>
        <meta property="og:url" content="https://pedalboards.vercel.app"></meta>

      </Head> */}
      <NextSeo
        title="Pedalboards"
        openGraph={{
          url: 'https://pedalboards.vercel.app',
          title: 'Welcome to Pedalboards',
          type: 'Website',
          description: 'Arma tu pedalera de guitarra o bajo. Adjunta samples de audio y compartelo con el mundo!',
          images: [
            {
              url: 'https://pedalboards.vercel.app/hero-image.jpg',
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
