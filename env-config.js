const prod = process.env.NODE_ENV === 'production'

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  'process.env.BACKEND_URL': prod ? '/personal-website' : '',
})
