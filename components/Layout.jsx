import React from 'react';
import { Header } from './';

// Whenever layout is called, it will be displayed as children with header and footer
const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout