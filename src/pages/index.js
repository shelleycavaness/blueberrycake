import React from "react"
import Layout from "../globalComponents/layout"
import Seo from "../globalComponents/seo"
import ShowcasePage from '../containers/showCase';

const ShowCase = () => (
  <Layout>
    <Seo 
      title="Showcase Page" 
      description="Showcase Page"
    />
    <ShowcasePage/>
  </Layout>
)

export default ShowCase