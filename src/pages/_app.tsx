import { AppProps } from 'next/app'
import '../styles/global.scss'

import { Header } from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
