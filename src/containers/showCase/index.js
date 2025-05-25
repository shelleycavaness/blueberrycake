import React from "react";
import { device } from "../../globalComponents/device";
import styled from "styled-components";
import ShowcaseHeader from "./showCaseHeader";
import { Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HeadingCol = styled.div`
    max-width: 800px;
    text-align: center;
    margin: 40px auto auto;
    @media screen and ${device.laptop}{
        margin-top: 30px;
    }
    h1 span{
        color: ${({theme})=>theme.secondaryColor};
    }
`;

const ProjectsWrapper = styled.div`
    margin-top: 60px;
    padding-bottom: 100px;

    @media screen and ${device.laptop}{
        margin-top: 40px;
    }
`;
const ProjectLight = styled.a`
    background-color: ${({theme})=>theme.cardBackgroundColor};
    display: flex;
    align-items: center;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    padding: 30px;
    &:before{
        position:absolute;
        top:0;
        left:-85%;
        display:block;
        content:'';
        width:50%;
        height:100%;
        background:-o-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,.8) 100%);
        background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),to(rgba(255,255,255,.8)));
        background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,.8) 100%);
        -webkit-transform:skewX(-25deg);
        -ms-transform:skewX(-25deg);
        transform:skewX(-25deg);
        z-index:100;
    }

    @-webkit-keyframes shine {
        100% {
        left: 125%;
        }
    }
    
    @keyframes shine {
        100% {
        left: 125%;
        }
    }

    &:hover:before{
        -webkit-animation: 1s shine;
        animation: 1s shine;
    }

    .product-image{
        width: 100% !important;
        margin: auto;
    }

    @media screen and ${device.laptop}{
        min-height: 300px;
    }
`;
const LightCardBtnBox = styled.a`
    display: block;
    padding: 30px;
    border-radius: 30px;
    margin-top: 20px;
    font-size: 30px;
    text-align: center;
    color:#fff;
    text-decoration: none;
    transition: all .5s;
    &:hover{
        color: ${({theme})=>theme.secondaryColor};
        transition: all .5s;
    }

    @media screen and ${device.laptop}{
        font-size:20px;
        padding: 20px;
        border-radius:20px;
        margin-bottom: 50px;
    }
`;

const Showcase = () => {

    const data = useStaticQuery(graphql`
        query{
            showcasePageJson {
                Heading
                themes {
                    id
                    heading
                    screenshotImgPath{
                        childImageSharp{
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }                   
                    linkUrl
                }
            }
        }
    `)

    return (
        <>
            <ShowcaseHeader />
            <Container>
                <Row>
                    <Col md={12}>
                        <HeadingCol>
                            <h1 dangerouslySetInnerHTML={{__html:data.showcasePageJson.Heading}}/>
                        </HeadingCol>
                    </Col>
                </Row>

                <ProjectsWrapper>
                    <Container>
                        <Row>
                            {
                                data.showcasePageJson.themes &&
                                data.showcasePageJson.themes.map((themeList,idx)=>{
                                    return(
                                        <Col md={6}>
                                            <ProjectLight href={idx !== 0 ? "/home-light" : "/home"}>
                                                <GatsbyImage
                                                    image={themeList.screenshotImgPath.childImageSharp.gatsbyImageData}
                                                    alt="Product Image"
                                                    className="product-image"
                                                />
                                            </ProjectLight>
                                            <LightCardBtnBox href={themeList.linkUrl}>
                                                {themeList.heading}
                                            </LightCardBtnBox>
                                        </Col>
                                    )
                                })
                            }
                            
                        </Row>
                    </Container>
                </ProjectsWrapper>
            </Container>
        </>
    )
}
export default Showcase;