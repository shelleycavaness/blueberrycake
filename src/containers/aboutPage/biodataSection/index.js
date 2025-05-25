import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiodataWrapper, BioDataBox, BioLeftBox, BioTableBox, BioTableLeftBox, BioTableRightBox, BioRightBox, CounterBox } from './biodata.style';
import SectionHeading from '../../../globalComponents/sectionHeading';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const BiodataSection = () => {
    const [show, setShow] = useState(false);

    const sensorOnChange = (isVisible) => {
        isVisible ? setShow(true) : setShow(false)
    }

    const data = useStaticQuery(graphql`
        query{
            allAboutPageJson{
                nodes{
                  personalInfo{
                    heading
                    tableData {
                      First_Name
                      Last_Name
                      Age
                      Nationality
                      Freelance
                      Address
                      Phone
                      Email
                      Skype
                      Language
                    }
                    statData {
                      _50__
                      _15__
                      _240__
                      _80__
                    } 
                }
                }
            }
        }
    `);

    const bioData = data.allAboutPageJson.nodes[0].personalInfo;
    const tableData = Object.entries(data.allAboutPageJson.nodes[0].personalInfo.tableData);
    const statData = Object.entries(data.allAboutPageJson.nodes[0].personalInfo.statData);
    return (
        <BiodataWrapper>
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionHeading
                            title={"Bio Data"}
                            titleBg={"Details"}
                            layoutStyles={{
                                marginTop: 0
                            }}
                        />
                    </Col>
                </Row>
                <BioDataBox>
                    <Row>
                        <Col lg={7}>
                            <BioLeftBox>
                                <h3>{bioData.heading}</h3>
                                <BioTableBox>
                                    <BioTableLeftBox>
                                        {
                                            tableData &&
                                            tableData.slice(0,5).map((item, idx) => {
                                                return (
                                                    <p key={idx}>
                                                        <span>{item[0].replace("_"," ")}</span>
                                                        <strong>{idx === 4 ? <i className='green'>{item[1]}</i> : ": "+item[1]}</strong>
                                                    </p>
                                                )
                                            })
                                        }
                                    </BioTableLeftBox>
                                    <BioTableRightBox>
                                    {
                                            tableData &&
                                            tableData.slice(5).map((item, idx) => {
                                                return (
                                                    <p key={idx}>
                                                        <span>{item[0].replace("_"," ")}</span>
                                                        <strong>{": "+item[1]}</strong>
                                                    </p>
                                                )
                                            })
                                        }
                                    </BioTableRightBox>
                                </BioTableBox>
                            </BioLeftBox>
                        </Col>
                        <Col lg={5}>
                            <BioRightBox>
                                {
                                    statData &&
                                    statData.map((item, idx)=>{
                                        return(
                                            <CounterBox>
                                                <h2>
                                                    <VisibilitySensor onChange={sensorOnChange} offset={{ top: 10 }} delayedCall>
                                                        <CountUp start={0} end={show ? item[0].replaceAll("_","") : 0} duration={2.75} suffix=" +" />
                                                    </VisibilitySensor>
                                                </h2>
                                                <p>
                                                    <strong>
                                                        {item[1]}
                                                    </strong>
                                                </p>
                                            </CounterBox>
                                        )
                                    })
                                }
                            </BioRightBox>
                        </Col>
                    </Row>
                </BioDataBox>
            </Container>
        </BiodataWrapper>
    )
}
export default BiodataSection;