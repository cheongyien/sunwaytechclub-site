import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout"

const eventsPage = () => {
  return (
    <Layout>
      <h1>Events</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default eventsPage
