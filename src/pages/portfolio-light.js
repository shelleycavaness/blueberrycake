import React from "react"
import Layout from "../globalComponents/layoutLight"
import Seo from "../globalComponents/seo"
import HeaderSection from "../globalComponents/headerSection"
import FooterSection from "../globalComponents/footerSection"
import PortfolioSection from "../containers/portfolioPage"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Portfolio" 
      description="Portfolio"
    />
    <HeaderSection/>
    <PortfolioSection/>
    <FooterSection/>
  </Layout>
)

export default IndexPage
