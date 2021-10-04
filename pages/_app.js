import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation'
import { ThemeProvider } from 'styled-components'
import {Provider as AuthProvider} from 'next-auth/client'
import {Provider, useDispatch } from 'react-redux'
// import store from './sto'
import Login from '../components/auth/Login'
import {store} from '../redux/store'
const theme = {
  colors: {
    color:'#191919',
    primary: "#E0FBFF",
    secondary: "#0910D0",
    accent: '#77059F',
  }
}
function MyApp({ Component,pageProps }) {
 
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AuthProvider >
        <Login/>
      
        <Navigation />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
    </Provider>
  )
}

export default MyApp

