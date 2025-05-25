import React from "react"
import Layout from "../globalComponents/layoutLight"
import Seo from "../globalComponents/seo"
import HeaderSection from "../globalComponents/headerSection"
import FooterSection from "../globalComponents/footerSection"
import BlogContentSection from "../containers/blogDetails/blogContent"
import BlogProfileSection from "../containers/blogDetails/blogProfile"
import RelatedBlogSection from "../containers/blogDetails/relatedBlogSection"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Blog Details" 
      description="Blog Details"
    />
    <HeaderSection/>
    <BlogContentSection/>
    <BlogProfileSection/>
    <RelatedBlogSection/>
    <FooterSection/>
  </Layout>
)

export default IndexPage
