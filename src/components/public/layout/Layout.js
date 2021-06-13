import React from 'react'
import HeaderPublic from './HeaderPublic'
import Footer from './Footer'

const Layout = ({ children }) => {
    return(
        <div>
            <HeaderPublic />
            {children}
            <Footer />
        </div>
    )
}

export default Layout