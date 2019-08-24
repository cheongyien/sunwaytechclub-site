import React, { useEffect } from "react"
import { Link } from "gatsby"
import useGlobal from 'src/redux/store'
import Layout from "../components/layout"
import SEO from "../components/seo"

const eventsPage = () => {
    const [globalState, globalAction] = useGlobal()

    useEffect(() => {
        globalAction.selectPage(3)
        globalAction.toggleDrawer(false)
    }, [])
    return (
        <Layout>
            <SEO title="Login" />
            <h1>Login</h1>
            <p>Welcome to store</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default eventsPage
