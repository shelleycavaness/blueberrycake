import React from "react";
import {
    BlogSlidesWrapper, SliderSection, SlideCol, SliderOuterSection,
    SliderInnerWrapper
} from "./relatedblog.style";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../../../globalComponents/sectionHeading";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
};
const RelatedBlogSection = () => {
    const data = useStaticQuery(graphql`
        query{
            allBlogPageJson{
                nodes{
                    blogListData {
                        id
                        blogImage{
                          childImageSharp{
                            gatsbyImageData(quality:100)
                          }
                        }
                      title
                      description
                      postedBy
                      postedOn
                      }
                }
            }
        }
    `);

    const blogData = data.allBlogPageJson.nodes[0].blogListData;

    return <BlogSlidesWrapper>
        <Container>
            <SliderOuterSection>
                <SectionHeading
                    title={"Recent"}
                    titleBg={"Articles"}
                />
                <Row>
                    <Col lg="12">
                        <SliderSection>
                            <Slider {...settings}>
                                {
                                    blogData &&
                                    blogData.map((item) => {
                                        return (
                                            <SliderInnerWrapper>
                                                <SlideCol>
                                                    <GatsbyImage
                                                        image={item.blogImage.childImageSharp.gatsbyImageData}
                                                        alt="Blog Details Image 1"
                                                        className="blog-details-img"
                                                    />
                                                    <h5>{item.title}</h5>
                                                    <p>By <span> {item.postedBy}</span> {item.postedOn}</p>
                                                </SlideCol>
                                            </SliderInnerWrapper>
                                        )
                                    })
                                }

                            </Slider>
                        </SliderSection>
                    </Col>
                </Row>
            </SliderOuterSection>
        </Container>
    </BlogSlidesWrapper>
}

export default RelatedBlogSection;
