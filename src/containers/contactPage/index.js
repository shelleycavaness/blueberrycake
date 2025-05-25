import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BannerWrapper,BannerFormCol,FormLeftCol,AddressCol,
    FormRightCol,FormGroup,FormGroupBtnCol
} from "./contactSection.style"
import SectionHeading from "../../globalComponents/sectionHeading";
import { useStaticQuery, graphql } from "gatsby";

const ContactSection = () => {
    const [formValues, setFormValues] = useState({
        name:"",
        email:"",
        message:"",
        errMsg:{
            nameErr:"",
            emailErr:"",
            messageErr:""
        }
    });
    const handleChange = (e)=>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    const handleClick = ()=>{
        let errMsgTemp = {
            ...formValues.errMsg
        }
        if(formValues.name === ""){
            errMsgTemp.nameErr = "Name is Required"
        }

        if(formValues.email === ""){
            errMsgTemp.emailErr = "EmailId is Required"
        }

        if(formValues.message === ""){
            errMsgTemp.messageErr = "Message is Required"
        }

        setFormValues(
            {
                ...formValues,
                errMsg : errMsgTemp
            }
        )
        if(Object.values(formValues.errMsg).length !== 0){
            setTimeout(()=>{
                setFormValues(
                    {
                        ...formValues,
                        errMsg:{
                            nameErr:"",
                            emailErr:"",
                            messageErr:""
                        }
                    }
                )
            },3000)
        }
    }
    const data = useStaticQuery(graphql`
        query{
            contactPageJson{
                contactHeading
                country
                phoneNumber
                emailId
                address
            }
        }
    `);

    const contactData = data.contactPageJson;
    return(
        <BannerWrapper>
            <Container>
                <SectionHeading
                    title = {"Contact"}
                    titleBg = {"Contact"}
                    layoutStyles = {{
                        marginTop:40
                    }}
                />
                <Row>
                    <Col lg="12">
                        <BannerFormCol>
                            <Row>
                                <Col lg="6">
                                    <FormLeftCol>
                                        <h3>{contactData.contactHeading}</h3>

                                        <AddressCol>
                                            <h5>{contactData.country}</h5>
                                            <p>{contactData.address}</p>
                                        </AddressCol>

                                        <AddressCol>
                                            <h5>Contact Us</h5>
                                            <p><span>Call:</span> {contactData.phoneNumber}</p>
                                            <p><span>Mail:</span> {contactData.emailId}</p>
                                        </AddressCol>
                                    </FormLeftCol>
                                </Col>
                                <Col lg="6">
                                    <FormRightCol>
                                        <FormGroup>
                                            <input type="text" placeholder="Name" onChange={handleChange} name="name"/>
                                            <span>{formValues.errMsg.nameErr}</span>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type="email" placeholder="Email" onChange={handleChange} name="email"/>
                                            <span>{formValues.errMsg.emailErr}</span>
                                        </FormGroup>
                                        <FormGroup>
                                            <textarea placeholder="Message" onChange={handleChange} name="message"></textarea>
                                            <span>{formValues.errMsg.messageErr}</span>
                                        </FormGroup>
                                        <FormGroupBtnCol>
                                            <button onClick={handleClick}><span>Send Message</span></button>
                                        </FormGroupBtnCol>
                                    </FormRightCol>
                                </Col>
                            </Row>
                        </BannerFormCol>
                    </Col>
                </Row>
            </Container>
        </BannerWrapper>
    )
}
export default ContactSection;
