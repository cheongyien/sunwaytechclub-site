import React from "react"
import { Link } from "react-router-dom"
import logo from "assets/images/logo.png"
import menu from "assets/images/menu.png"
import avatar from "assets/images/avatar.png"
import useGlobal from 'redux/store'
import './mobile.scss'

export default (props) => {
    const [globalState, globalAction] = useGlobal()
    return (
        <div className="mobile-container">
            <div className="mobile-menu" onClick={() => globalAction.toggleDrawer(true)} >
                <img src={menu} width="25" height="20" alt="logo" />
            </div>
            <Link className="mobile-logo" onClick={() => globalAction.selectPage(4)} to="/" >
                <img src={logo} width="80" height="80" alt="logo" />
            </Link>
            <Link className="mobile-avatar" onClick={() => globalAction.selectPage(3)} to="/login" >
                <img src={avatar} width="35" height="40" alt="logo" />
            </Link>
        </div>
    )
}