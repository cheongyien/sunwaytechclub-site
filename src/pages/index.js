import React, { useEffect } from "react"
import { Link } from "gatsby"
import useGlobal from 'src/redux/store'
import Layout from "../components/layout/"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [globalState, globalAction] = useGlobal()

  useEffect(() => {
    globalAction.selectPage(4)
    globalAction.toggleDrawer(false)

  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/events/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
