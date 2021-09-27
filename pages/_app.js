import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation'
import { ThemeProvider } from 'styled-components'
import {Provider} from 'next-auth/client'
import { getSession } from 'next-auth/client'

const theme = {
  colors: {
    primary: "#E0FBFF",
    secondary: "#0910D0",
    accent: '#77059F',
  }
}
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
