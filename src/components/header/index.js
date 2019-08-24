import React from "react"
import Headroom from 'react-headroom'
import './index.scss'
import MobileNav from './navbar/mobile'
import DesktopNav from './navbar/desktop'

const Header = (props) => {

  return (
    <Headroom>
      <div className="nav-container">
        <MobileNav />
        <DesktopNav />
      </div>
    </Headroom>
  )
}

export default Header
