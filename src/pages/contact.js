import React from "react"
import Layout from "../globalComponents/layout"
import Seo from "../globalComponents/seo"
import HeaderSection from "../globalComponents/headerSection"
import FooterSection from "../globalComponents/footerSection"
import ContactSection from "../containers/contactPage"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Contact" 
      description="Contact"
    />
    <HeaderSection/>
    <ContactSection/>
    <FooterSection/>
  </Layout>
)

export default IndexPage
