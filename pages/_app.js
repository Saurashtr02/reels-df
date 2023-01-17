import '@/styles/globals.css'
import '../pages/signup/signup.css'
import '../pages/login/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Feed.css'
import '../components/ProfileComp.css'
import AuthWrapper from '@/context/auth';
export default function App({ Component, pageProps }) {
  
  return (
  <AuthWrapper >
  <Component {...pageProps} />
  </AuthWrapper>
  )
}
