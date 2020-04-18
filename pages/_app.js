import Layout from '../components/templates/Layout/Layout'
import './global.css'
import 'papercss/dist/paper.css'
import Meta from '../components/atom/Meta/Meta'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
