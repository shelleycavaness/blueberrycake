import React from "react"
import Layout from "../globalComponents/layout"
import Seo from "../globalComponents/seo"
import HeaderSection from "../globalComponents/headerSection"
import FooterSection from "../globalComponents/footerSection"
import BlogSection from "../containers/blogPage"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Blog" 
      description="Blog"
    />
    <HeaderSection/>
    <BlogSection/>
    <FooterSection/>
  </Layout>
)

export default IndexPage
