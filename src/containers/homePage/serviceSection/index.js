import React from "react";
import {ServicesWrapper,ServicesRow,ServicesCol,ServicesTextCol} from "./service.style"
import {Container,Row,Col} from "react-bootstrap";
import SectionHeading from "../../../globalComponents/sectionHeading";
import data from '../../../pagedata/homePage/index.json'

const ServiceSection = () => {
    return(
        <ServicesWrapper>
            <Container>
                <SectionHeading
                    title = "What I Do"
                    titleBg = "Services"
                />
                <ServicesRow>
                    <Row>
                        {
                            data.servicesSection &&
                            data.servicesSection.map((item)=>{
                                return(
                                    <Col lg="4" md="4">
                                        <ServicesCol>
                                            <img
                                                src = {item.icon}
                                                alt="Service Icon"
                                                className="service-icon"
                                            />
                                            <ServicesTextCol>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </ServicesTextCol>
                                        </ServicesCol>
                                    </Col>
                                )
                            })
                        }
                        
                    </Row>
                </ServicesRow>
            </Container>
        </ServicesWrapper>
    )
}
export default ServiceSection;
