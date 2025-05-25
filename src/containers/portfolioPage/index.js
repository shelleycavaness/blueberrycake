import React, { useState } from "react"
import { BlogWrapper } from "./portfolio.style"
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap"
import SectionHeading from "../../globalComponents/sectionHeading"
import PortfolioItem from "./portfolioItem"
import PortfolioDetailsDialog from "../../globalComponents/portfolioDetailsDialog"
import { useStaticQuery, graphql } from "gatsby"

const PortfolioSection = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = useStaticQuery(graphql`
        query{
            allPortfolioPageJson{
                nodes{
                  all {
                    workImg{
                        childImageSharp{
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }
                    workName
                    date
                  }
                  graphics {
                    workImg{
                        childImageSharp{
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }
                    workName
                    date
                  }
                  illustration {
                    workImg{
                        childImageSharp{
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }
                    workName
                    date
                  }
                  wireframes {
                    workImg{
                        childImageSharp{
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }
                    workName
                    date
                  }
                  video {
                    workImg{
                        childImageSharp{
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }
                    workName
                    date
                  }
                }
            }
        }
    `)

    const portfolioData = data.allPortfolioPageJson.nodes[0];
    const portfolioHeadings = Object.keys(data.allPortfolioPageJson.nodes[0]);

    return (
        <BlogWrapper>
            <Container>
                <SectionHeading
                    title={"Portfolio"}
                    titleBg={"Works"}
                    layoutStyles={{
                        marginTop: 40
                    }}
                />
                <Tabs
                    defaultActiveKey="all"
                    id="portfolio-tabs"
                >
                    {
                        portfolioHeadings &&
                        portfolioHeadings.map((item) => {
                            return (
                                <Tab eventKey={item} title={item}>
                                    <Row>
                                        {
                                            portfolioData[item] &&
                                            portfolioData[item].map((subItem) => {
                                                return (
                                                    <Col lg="4" md="6" onClick={handleShow}>
                                                        <PortfolioItem
                                                            imageSrc={subItem.workImg.childImageSharp.gatsbyImageData}
                                                            alt="Portfolio Image"
                                                            title={subItem.workName}
                                                            tag={item}
                                                        />
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab>
                            )
                        })
                    }
                    {/* <Tab eventKey="graphics" title="Graphics">
                        <Row>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-3.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-2.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-1.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-6.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="illustration" title="Illustration">
                        <Row>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-5.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-3.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-4.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="wireframes" title="Wire Frames">
                        <Row>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-2.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-3.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-1.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-4.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-5.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="video" title="Video">
                        <Row>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-1.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                            <Col lg="4" md="6" onClick={handleShow}>
                                <PortfolioItem
                                    imageSrc="/images/portfolio-images/projects-image-2.jpg"
                                    alt="Portfolio Image"
                                    title="Corporate Website"
                                    tag="Graphics"
                                />
                            </Col>
                        </Row>
                    </Tab> */}
                </Tabs>
            </Container>
            <PortfolioDetailsDialog
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                project={
                    {
                        name: "Video Project",
                        project: "Video",
                        language: "Adobe After Effects",
                        client: "blueberrycake",
                        previewUrl: "www.blueberrycake.com",
                        youtubeUrl: "https://www.youtube.com/embed/LTZzCfMw6zRGAEjd",
                        imageUrl: "",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                    }
                }
            />
        </BlogWrapper>
    )
}
export default PortfolioSection;
