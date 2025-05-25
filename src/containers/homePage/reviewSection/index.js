import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import {
    ReviewSectionWrapper, SliderWrapper, SlideCol, SlideProfile,
    SlideProfileDesc
} from "./review.style"
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
    autoplay: true,
    autoplaySpeed: 2000,
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
                initialSlide: 2
            }
        }
    ]
};

const ReviewSection = () => {
    const data = useStaticQuery(graphql`
        query{
            allHomePageJson{
                nodes{
                    testimonialSection{
                        userImg{
                            childImageSharp{
                                gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                            }
                        }
                        name
                        company
                        review
                    }
                }
            }
        }
    `);

    const testimonialItem = data.allHomePageJson.nodes[0].testimonialSection;

    return <ReviewSectionWrapper>
        <Container>
            <SectionHeading
                title="Testimonials"
                titleBg="Reviews"
            />
            <Row>
                <Col lg={12} md={12}>
                    <SliderWrapper>
                        <Slider {...settings}>
                            {
                                testimonialItem &&
                                testimonialItem.map((items) => {
                                    return (
                                        <SlideCol>
                                            <SlideProfileDesc>
                                                <p>{items.review}</p>
                                            </SlideProfileDesc>
                                            <SlideProfile>
                                                <GatsbyImage
                                                    image={items.userImg.childImageSharp.gatsbyImageData}
                                                    alt="author Image"
                                                    className="author"
                                                />
                                                <span>
                                                    <h4>{items.name}</h4>
                                                    <p>{items.company}</p>
                                                </span>
                                            </SlideProfile>
                                        </SlideCol>
                                    )
                                })
                            }

                        </Slider>
                    </SliderWrapper>
                </Col>
            </Row>
        </Container>
    </ReviewSectionWrapper>
}
// class ReviewSection extends Component {
//     constructor(props) {
//         super(props);
//         this.next = this.next.bind(this);
//         this.previous = this.previous.bind(this);
//     }

//     next() {
//         this.slider.slickNext();
//     }
//     previous() {
//         this.slider.slickPrev();
//     }

//     render() {

//         return (

//         )
//     }
// }

export default ReviewSection;
