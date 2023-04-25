import Header from '../components/Header/header'
import '../styles/globals.css'
import '../styles/Landing/showCase.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}
