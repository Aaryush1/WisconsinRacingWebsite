import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';

const lTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#B32031',
    },
    text: {
      primary: '#000000',
    },
    background: {
      default: '#ffffff',
    },
    mode: 'light',
  },
  typography: {

  }
});

const dTheme = createTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#B32031',
    },
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#000000',
    },
    mode: 'dark',
  },
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lTheme}>
        <ResponsiveAppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}