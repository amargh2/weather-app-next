import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/main.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Component {...pageProps} />
  ) 
}
