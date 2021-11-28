import '../styles/globals.css'
import '../styles/alert.css'
import Navigation from '../components/navigation/Navigation'
import Landing from '../components/landingPage/Landing'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from '@auth0/nextjs-auth0';
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Alert from '../components/Alert';
import Loader from '../components/loaders/Loader';
import Background from '../components/background/Background'
const theme = {
  colors: {
    color: '#191919',
    primary: "#E0FBFF",
    secondary: "#0910D0",
    accent: '#77059F',
  }
}
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UserProvider >
        <Loader/>
          <Navigation />
          <Background/>
          <Alert/>
          {/* <Landing/> */}
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp

