import React from "react";
import Layout from "../globalComponents/layoutLight"
import Seo from "../globalComponents/seo"
import HeaderSection from "../globalComponents/headerSection"
import FooterSection from "../globalComponents/footerSection"
import AboutSection from "../containers/aboutPage/aboutSection"
import BiodataSection from "../containers/aboutPage/biodataSection"
import SkillSection from "../containers/aboutPage/skillsSection"
import ExperiencedSection from "../containers/aboutPage/ExperienceSection";

const AboutPage = ()=>{
    return(
        <Layout>
            <Seo 
                title="About" 
                description="About"
            />
            <HeaderSection/>
            <AboutSection/>
            <BiodataSection/>
            <SkillSection/>
            <ExperiencedSection/>
            <FooterSection/>
        </Layout>
    )
}
export default AboutPage