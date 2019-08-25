import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import useGlobal from 'redux/store'
import Layout from "../components/layout"

const eventsPage = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Welcome to store</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default eventsPage
