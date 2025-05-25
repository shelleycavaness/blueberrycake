import React, { useState } from "react";
import {
    WorkWrapper, WorkCol, ImgHolder, ContentCol,
    LinkIcon
} from "./work.style"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "../../../globalComponents/sectionHeading";
import PortfolioDetailsDialog from "../../../globalComponents/portfolioDetailsDialog";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const WorkSection = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = useStaticQuery(graphql`
        query {
            allHomePageJson {
                nodes {
                  portfolioSection {
                    workImg {
                      childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                      }
                    }
                    date
                    workName
                  }
                }
              }
        }
    `);

    const portfolioItems = data.allHomePageJson.nodes[0].portfolioSection;

    return (
        <WorkWrapper>
            <Container>
                <SectionHeading
                    title="Portfolio"
                    titleBg="Works"
                />
                <Row>
                    {
                        portfolioItems &&
                        portfolioItems.map((items) => {
                            return (
                                <Col md="6">
                                    <WorkCol>
                                        <ImgHolder>
                                            <GatsbyImage
                                                image={items.workImg.childImageSharp.gatsbyImageData}
                                                alt={items.workName}
                                                className="portfolio"
                                            />
                                            <LinkIcon />
                                            <button onClick={handleShow}></button>
                                        </ImgHolder>
                                        <ContentCol>
                                            <h5>{items.workName}</h5>
                                            <p>{items.date}</p>
                                        </ContentCol>
                                    </WorkCol>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
            
            <PortfolioDetailsDialog
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                project={
                    {
                        name: "Youtube Project",
                        project: "video",
                        language: "Adobe After Effects",
                        client: "Reactrepo",
                        previewUrl: "www.reactrepo.com",
                        youtubeUrl: "https://www.youtube.com/embed/NDszKrPUEYY",
                        imageUrl: "/images/home-images/projects-image-6.jpg",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                    }
                }
            />
        </WorkWrapper>
    )
}
export default WorkSection;
