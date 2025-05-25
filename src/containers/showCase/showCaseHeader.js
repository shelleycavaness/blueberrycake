import React from "react";
import { device } from "../../globalComponents/device";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Commonbtn } from "../../globalComponents/common.style";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const ShowcaseHeaderWrapper = styled.div`

`;

const ShowcaseHeaderCol = styled.div`
    display: flex;
    align-items: center;
    height: 150px;

    @media screen and ${device.mobileL}{
        height: 100px;
    }
`;
const LogoCol = styled.div`
    width:50%;

    .logo-image{
        max-width: 200px !important;

        @media screen and ${device.mobileL}{
            max-width: 150px !important;
        }
    }
`;

const BuyCol = styled.div`
     width:50%;   
     text-align: right;
`;

const BuyBtn = styled(Commonbtn)`
    width: 180px;

    @media screen and ${device.mobileL}{
        width: auto;
        padding:7px 20px;
    }
`;

const ShowcaseHeader = () => {
    const data = useStaticQuery(graphql`
            query {
                showcasePageJson {
                    headerData{
                      logoPath{
                        childImageSharp {
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                      }
                      buttonText
                      buyNowUrl
                    }
                }
            }
    `)
    return (
        <ShowcaseHeaderWrapper>
            <Container>
                <Row>
                    <Col md={12}>
                        <ShowcaseHeaderCol>
                            <LogoCol>
                                <GatsbyImage
                                    image={data.showcasePageJson.headerData.logoPath.childImageSharp.gatsbyImageData}
                                    alt="Logo Image"
                                    className="logo-image"
                                />
                            </LogoCol>
                            <BuyCol>
                                <BuyBtn target="_blank" href={data.showcasePageJson.headerData.buyNowUrl}><span>{data.showcasePageJson.headerData.buttonText}</span></BuyBtn>
                            </BuyCol>
                        </ShowcaseHeaderCol>
                    </Col>
                </Row>
            </Container>
        </ShowcaseHeaderWrapper>
    )
}
export default ShowcaseHeader;