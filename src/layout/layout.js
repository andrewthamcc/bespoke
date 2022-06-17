import React from 'react'
import { Header, Footer } from './components'

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
