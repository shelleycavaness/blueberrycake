import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ExperiencedWrapper, ExperiencedHeadingCol, ExperienceTimeLineWrapper, TimelineCol, TimelineSingleItem } from "./experience.style";
import SectionHeading from "../../../globalComponents/sectionHeading";
import { useStaticQuery, graphql } from "gatsby";

const ExperiencedSection = () => {
    const data = useStaticQuery(graphql`
        query{
            allAboutPageJson{
                nodes{
                  personalInfo{
                    timeLine {
                      date
                      role
                      company
                      desc
                        }
                    }
                }
            }
        }
    `)

    const timelineData = data.allAboutPageJson.nodes[0].personalInfo.timeLine;
    return <ExperiencedWrapper>
        <Container>
            <Row>
                <Col md={12}>
                    <ExperiencedHeadingCol>
                        <SectionHeading
                            title={"Timeline"}
                            titleBg={"Victory"}
                        />
                    </ExperiencedHeadingCol>

                    <ExperienceTimeLineWrapper>
                        <Row>
                            <Col md={6}>
                                <TimelineCol>
                                    {
                                        timelineData &&
                                        timelineData.slice(0, 3).map((item) => {
                                            return (
                                                <TimelineSingleItem>
                                                    <span>{item.date}</span>

                                                    <h5>{item.role}</h5>
                                                    <small>{item.company}</small>
                                                    <p>{item.desc}</p>
                                                </TimelineSingleItem>
                                            )
                                        })
                                    }
                                </TimelineCol>
                            </Col>
                            <Col md={6}>
                                <TimelineCol>
                                {
                                        timelineData &&
                                        timelineData.slice(3).map((item) => {
                                            return (
                                                <TimelineSingleItem>
                                                    <span>{item.date}</span>

                                                    <h5>{item.role}</h5>
                                                    <small>{item.company}</small>
                                                    <p>{item.desc}</p>
                                                </TimelineSingleItem>
                                            )
                                        })
                                    }
                                </TimelineCol>
                            </Col>
                        </Row>
                    </ExperienceTimeLineWrapper>
                </Col>
            </Row>
        </Container>
    </ExperiencedWrapper>
}
export default ExperiencedSection;