import '../styles/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGoogle, faGithub, faLinkedin, faInstagram, faTwitter)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
