import Layout from '../components/templates/Layout/Layout'
import './global.css'
import 'papercss/dist/paper.css'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <head>
        <title></title>
        <meta name='description' content='' />
        <meta property='og:type' content='website' />
        <meta name='og:title' property='og:title' content='' />
        <meta name='og:description' property='og:description' content='' />
        <meta property='og:site_name' content='' />
        <meta property='og:url' content='' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='' />
        <meta
          name='twitter:description'
          content={'Joseph Trinh software engineer resume'}
        />
        <meta name='twitter:site' content='' />
        <meta name='twitter:creator' content='' />
        {/* <link rel='icon' type='image/png' href='/static/images/favicon.ico' />
        <link rel='apple-touch-icon' href='/static/images/favicon.ico' /> */}
        <link rel='stylesheet' href='' />
        <script type='text/javascript' src=''></script>
      </head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
