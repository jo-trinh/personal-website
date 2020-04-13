import React from 'react'
import { Grommet } from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

const Layout = (props) => {
  return <Grommet theme={theme}>{props.children}</Grommet>
}
export default Layout
