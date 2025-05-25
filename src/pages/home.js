import React from "react"
import Layout from "../globalComponents/layout"
import Seo from "../globalComponents/seo"
import BannerSection from "../containers/homePage/bannerSection"
import HeaderSection from "../globalComponents/headerSection"
import FooterSection from "../globalComponents/footerSection"
import WorkSection from "../containers/homePage/workSection"
import ServiceSection from "../containers/homePage/serviceSection"
import ReviewSection from "../containers/homePage/reviewSection"


const IndexPage = () => (
  <Layout>
    <Seo 
      title="Home" 
      description="Home"
    />
    <HeaderSection/>
    <BannerSection/>
    <ServiceSection/>
    <WorkSection/>
    <ReviewSection/>
    <FooterSection/>
  </Layout>
)

export default IndexPage
