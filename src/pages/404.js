import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/simple/paragraph"
import Title from "../components/simple/title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title variant="h1">PAGE NOT FOUND</Title>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
  </Layout>
)

export default NotFoundPage
