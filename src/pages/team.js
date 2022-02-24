import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Team = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Team XXX" />
      <h1>404: Hello! We are Team XXX!</h1>
      <p>Member 1</p>
      <p>Member 2</p>
      <p>Member 3</p>
    </Layout>
  )
}

export default Team

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
