import React from 'react'
import PropTypes from "prop-types"
import Header from '../header'
import Drawer from '../drawer'
import Footer from '../footer'


const Layout = ({ children }) => {
    return (
        <div>
            <Drawer />
            <Header />
            <div className="body">
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout