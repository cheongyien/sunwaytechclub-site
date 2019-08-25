import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout/"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

      </div>
      <Link to="/events/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
