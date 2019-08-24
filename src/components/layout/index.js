import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import Drawer from "../drawer"
import Footer from "../footer"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Drawer />
      <Header />
      <div className="body">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout