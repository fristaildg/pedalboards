import React from 'react'
import { ThemeProvider, GlobalStyles } from '@spark-digital/ignition'
import { Provider as StoreProvider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { FirebaseAppProvider } from 'reactfire'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../src/store'
import 'firebase/firestore';
import 'firebase/storage';
import '../styles/globals.css'

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

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider>
        <Auth0Provider {...auth0Credentials}>
          <StoreProvider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <Component {...pageProps} />
              </FirebaseAppProvider>
            </PersistGate>
          </StoreProvider>
        </Auth0Provider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default MyApp
