import React from 'react'
import Header from './Header'
import Routers from '../router/Routers'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout
