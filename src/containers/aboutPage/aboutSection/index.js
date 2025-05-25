import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutWrapper, AboutCol, AboutLeftCol, AboutRightCol, AboutBtn } from "./about.style";
import SectionHeading from "../../../globalComponents/sectionHeading";
import { MdDownload } from "react-icons/md";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutSection = ()=>{
    const data = useStaticQuery(graphql`
        query{
            aboutPageJson{
                bannerSection{
                    bannerImage{
                        childImageSharp{
                            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                        }
                    }
                    title
                    designaton
                    description
                    buttonText
                    buttonUrl
                }
            }
        }
    `)

    const aboutBannerData = data.aboutPageJson.bannerSection;
    return(
        <AboutWrapper>
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionHeading
                            title={"About"}
                            titleBg={"Mathew"}
                            layoutStyles={{
                                marginTop: 40
                            }}
                        />
                    </Col>
                </Row>
                <AboutCol>
                    <Row>
                        <Col md={5}>
                            <AboutLeftCol>
                                <GatsbyImage
                                    image = {aboutBannerData.bannerImage.childImageSharp.gatsbyImageData}
                                    alt="About Image"
                                    className="about-image"
                                />
                            </AboutLeftCol>
                        </Col>
                        <Col md={7}>
                            <AboutRightCol>
                                <h2>{aboutBannerData.title}</h2>
                                <span className="aboutSubHeading">{aboutBannerData.designaton}</span>
                                <p>{aboutBannerData.description}</p>
                                <AboutBtn><span>{aboutBannerData.buttonText} <MdDownload/></span> </AboutBtn>
                            </AboutRightCol>
                        </Col>
                    </Row>
                </AboutCol>
            </Container>
        </AboutWrapper>
    )
}
export default AboutSection;