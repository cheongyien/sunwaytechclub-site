import React from "react"
import { Link } from "react-router-dom"
import Logo from "assets/images/logo"
import pages from './pages'
import useGlobal from 'redux/store'
import "./desktop.scss"

export default () => {
    const [globalState, globalAction] = useGlobal()
    return (
        <div className="desktop-container">
            <Link onClick={() => globalAction.selectPage(4)} to="/" >
                <Logo className="desktop-logo" width="80" height="80" alt="logo" />
            </Link>
            {pages.map((item, index) =>
                <>
                    {index === globalState.page ?
                        <Link className={`desktop-${item.class}`} >
                            <div className="desktop-page-selected">{item.name}</div>
                        </Link>
                        :
                        <Link onClick={() => globalAction.selectPage(index)} className={`desktop-${item.class}`} to={item.path} >
                            {item.name}
                        </Link>
                    }
                </>
            )}
        </div>
    )
}
