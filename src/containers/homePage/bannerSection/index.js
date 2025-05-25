import React from "react";
import { BannerCol, BannerWrapper, BannerImage, ImageBackground,
    BannerContent, AboutMeLink, ImageBackground2 } from "./banner.style"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BannerSection = () => {

    const data = useStaticQuery(graphql`
        query{
            homePageJson {
                bannerSection{
                  bannerImage{
                    childImageSharp{
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                  }
                  subHeading
                  mainHeading
                  designation
                  description
                  buttonText
                  buttonUrl
                }
            }
        }
    `)

    const bannerData = data.homePageJson.bannerSection;
    return (
            <BannerWrapper>
                <Container>
                    <Row>
                        <Col md="12">
                            <BannerCol>
                                <BannerContent>
                                    <span>{bannerData.subHeading}</span>
                                    <h1>{bannerData.mainHeading}</h1>
                                    <h2>{bannerData.designation}</h2>
                                    <p>{bannerData.description}</p>
                                    <AboutMeLink href={bannerData.buttonUrl}><span>{bannerData.buttonText}</span></AboutMeLink>
                                </BannerContent>
                                <BannerImage>
                                    <ImageBackground />
                                    <ImageBackground2 />
                                    <GatsbyImage
                                        image = {bannerData.bannerImage.childImageSharp.gatsbyImageData}
                                        alt="Hero Image"
                                        className="banner-image"
                                    />
                                </BannerImage>
                            </BannerCol>
                        </Col>
                    </Row>
                </Container>
            </BannerWrapper>
    )
}
export default BannerSection;
