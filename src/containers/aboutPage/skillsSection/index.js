import React from "react";
import SectionHeading from '../../../globalComponents/sectionHeading';
import { SkillsWrapper, ProgressbarWrapper, ProgressCol } from './skills.style';
import { Col, Container, Row } from 'react-bootstrap';
import PercentageCircle from '../../../globalComponents/percentageCircle';
import VisibilitySensor from "react-visibility-sensor";
import { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";

const SkillSection = () => {
    const [show, setShow] = useState(false);
    const showSensor = (isVisible) => {
        isVisible ? setShow(true) : setShow(false)
    }

    const data = useStaticQuery(graphql`
        query{
            allAboutPageJson{
                nodes{
                  personalInfo{
                    skillsData {
                      Figma
                      Photoshop
                      Illustrator
                      Adobe_XD
                      ReactJs
                      HTML
                      CSS
                      Javascript
                    }
                }
                }
            }
        }
    `)

    const skillsData = Object.entries(data.allAboutPageJson.nodes[0].personalInfo.skillsData);
    return (
        <SkillsWrapper>
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionHeading
                            title={"My Skills"}
                            titleBg={"Expert"}
                            layoutStyles={{
                                marginTop: 0
                            }}
                        />
                    </Col>
                </Row>
                <ProgressbarWrapper>
                    <VisibilitySensor onChange={showSensor} offset={{ top: 10 }} delayedCall>
                        <Row>
                            {
                                skillsData &&
                                skillsData.map((items) => {
                                    return (
                                        <Col md={3} sm={6}>
                                            <ProgressCol>
                                                <PercentageCircle
                                                    percentage={items[1]}
                                                    text={items[0].replace("_"," ")}
                                                    flag={show}
                                                />
                                            </ProgressCol>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </VisibilitySensor>
                </ProgressbarWrapper>
            </Container>
        </SkillsWrapper>
    )
}
export default SkillSection;