// pages/_app.js

import 'bootstrap/dist/css/bootstrap.min.css' // Import CSS Bootstrap
import '../styles/globals.css' // Import file CSS kustom Anda (jika ada)
import { Provider } from '../store'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
