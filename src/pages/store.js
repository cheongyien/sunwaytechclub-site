import React, { useEffect } from "react"
import { Link } from "gatsby"
import useGlobal from 'src/redux/store'
import Layout from "../components/layout"
import SEO from "../components/seo"

const eventsPage = () => {
    const [globalState, globalAction] = useGlobal()

    useEffect(() => {
        globalAction.selectPage(2)
        globalAction.toggleDrawer(false)
    }, [])
    return (
        <Layout>
            <SEO title="Events" />
            <h1>Store</h1>
            <p>Welcome to store</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default eventsPage
