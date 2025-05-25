import React from "react";
import {Container,Row,Col} from "react-bootstrap"
import {FooterWrapper,BottomFooterRow, FooterSocial, FooterLeftCol, FooterRightCol, FooterCenterCol} from "./footer.style"
import FooterLogo from "./footerLogo";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoYoutube, BiLogoInstagram, BiLogoPinterestAlt } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";

const FooterSection = () =>{
    const scrollUp = ()=>{
        window.scrollTo(0,0)
    }

    const data = useStaticQuery(graphql`
        query{
            footerSectionJson {
                lightLogoImg{
                    childImageSharp{
                        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                    }
                }
                darkLogoImg{
                    childImageSharp{
                        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                    }
                }
                leftMenu {
                  text
                  url
                }
                leftMenu {
                  text
                  url
                }
                rightText
                middleText
                socialMediaUrl {
                  faceBook
                  instagram
                  linkedIn
                  pinterest
                  twitter
                  youtube
                }
              }
        }
    `)

    const footerData = data.footerSectionJson;
    return(
        <FooterWrapper>
            <Container>
                <FooterLogo 
                    lightLogoPath={data.footerSectionJson.lightLogoImg.childImageSharp.gatsbyImageData}
                    darkLogoPath={data.footerSectionJson.darkLogoImg.childImageSharp.gatsbyImageData}
                />
                <Row>
                    <Col md={12}>
                        <FooterSocial>
                            <ul>
                                <li>
                                    <Link href={footerData.socialMediaUrl.faceBook}>
                                        <BiLogoFacebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={footerData.socialMediaUrl.twitter}>
                                        <BiLogoTwitter/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={footerData.socialMediaUrl.linkedIn}>
                                        <BiLogoLinkedin/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={footerData.socialMediaUrl.youtube}>
                                        <BiLogoYoutube/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={footerData.socialMediaUrl.instagram}>
                                        <BiLogoInstagram/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={footerData.socialMediaUrl.pinterest}>
                                        <BiLogoPinterestAlt/>
                                    </Link>
                                </li>
                            </ul>
                        </FooterSocial>
                    </Col>
                </Row>
                <BottomFooterRow>
                    <Row>
                        <Col md={3}>
                            <FooterLeftCol>
                                <p><Link href={footerData.leftMenu.url}>{footerData.leftMenu.text}</Link></p>
                            </FooterLeftCol>
                        </Col>
                        <Col md={6}>
                            <FooterCenterCol>
                                <p>{footerData.middleText}</p>
                            </FooterCenterCol>
                        </Col>
                        <Col md={3}>
                            <FooterRightCol>
                                <p onClick={scrollUp}>{footerData.rightText} <FaArrowUp/></p>
                            </FooterRightCol>
                        </Col>
                    </Row>
                </BottomFooterRow>
            </Container>
        </FooterWrapper>
    )
}
export default FooterSection;
