import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </> est
  )
}