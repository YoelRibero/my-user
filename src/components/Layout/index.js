import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Header'

export default function Layout({ children, title, subtitle }) {
  return (
    <>
      <Helmet>
        {title && <title>{title} | MyUser 💁‍♀️</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Header />
      {children}
    </>
  )
}
