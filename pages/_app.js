import React from 'react'
import { ThemeProvider, GlobalStyles } from '@spark-digital/ignition'
import { Provider as StoreProvider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { FirebaseAppProvider } from 'reactfire'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Head from 'next/head'
import styled from 'styled-components'
import store from '../src/store'
import 'firebase/firestore';
import 'firebase/storage';
import '../styles/globals.css'
import Header from '../src/components/Header'
import { COLORS, SIZES, Spacer } from '../src/common'

const auth0Credentials = {
  domain: 'mtg-ts.auth0.com',
  clientId: 'zFWg56iAlWCvxNdk4S4GEO7j22X8Jfmb',
  redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://pedalboards-fristaildg.vercel.app'
}


const firebaseConfig = {
  apiKey: "AIzaSyC66PQkxUfUjEqcDkYlnZZ2YvbgkJd29QQ",
  authDomain: "pedalboard-dd8b2.firebaseapp.com",
  projectId: "pedalboard-dd8b2",
  storageBucket: "pedalboard-dd8b2.appspot.com",
  messagingSenderId: "995410926877",
  appId: "1:995410926877:web:b3769e348d599bdbe615f4",
  measurementId: "G-YSF1V6BQFW"
}

let persistor = persistStore(store)

const StyledMain = styled.main`
  width: 100%;
  /* height: ${`calc(100% - ${SIZES.HEADER_HEIGHT}px)`};
  height: 100%; */
  background-color: ${COLORS.BODY};
  color: ${COLORS.WHITE};
`

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider>
        <Auth0Provider {...auth0Credentials}>
          <StoreProvider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <>
                  <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@700&family=Fira+Sans+Condensed:wght@600&family=Trykker&display=swap" rel="stylesheet" />
                  </Head>
                  <Header />
                  <StyledMain>
                    <Spacer spacingY={SIZES.HEADER_HEIGHT} />
                    <Component {...pageProps} />
                  </StyledMain>
                  <div id="modal-portal"></div>
                  <div id="alert-portal"></div>
                </>
              </FirebaseAppProvider>
            </PersistGate>
          </StoreProvider>
        </Auth0Provider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default MyApp
