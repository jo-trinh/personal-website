import Layout from '../components/templates/Layout/Layout'
import './global.css'
import 'papercss/dist/paper.css'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
