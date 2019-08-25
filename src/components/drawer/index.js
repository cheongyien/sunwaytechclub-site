import React from 'react'
import { Link } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import pages from '../header/navbar/pages'
import logo from "assets/images/logo.png"

import useGlobal from 'redux/store'
import './index.scss'

export default (props) => {
    const [globalState, globalAction] = useGlobal()
    return (
        <Drawer open={globalState.drawerVisible} onClose={() => globalAction.toggleDrawer(false)} anchor="left"  >
            <div className="drawer-container">
                <Link onClick={() => globalAction.selectPage(4)} to="/" >
                    <img className="drawer-logo" src={logo} width="80" height="80" alt="logo" />
                </Link>
                {pages.map((item, index) => (
                    <>
                        {index === globalState.page ?
                            <Link className={`drawer-${item.class}`} >
                                <div className="drawer-page-selected">{item.name}</div>
                            </Link>
                            :
                            <Link onClick={() => globalAction.selectPage(index)} className={`drawer-${item.class}`} to={item.path} >
                                {item.name}
                            </Link>
                        }
                    </>
                ))}
            </div>
        </Drawer>
    )
}
