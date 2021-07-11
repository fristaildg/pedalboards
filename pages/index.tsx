import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Welcome from '../src/components/Welcome';

const Home = () => {
  return (
    <>
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
