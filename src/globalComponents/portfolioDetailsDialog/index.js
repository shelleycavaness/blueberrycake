import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from "react-icons/io";
import { Col, Row } from 'react-bootstrap';
import { IoDocumentTextOutline, IoCodeSlashOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { Link } from 'gatsby-link';
import { WorkModalSection, CloseBtnCol, ModalInfoCol, ModalInfoLeftBox, ModalInfoRightBox, 
    ModalImgDescCol } from './portfolioDetailsDialog.style';

const PortfolioDetailsDialog = ({ show, handleClose, project }) => {
    return (
        <WorkModalSection show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    <h4>{project.name}</h4>
                </Modal.Title>
                <CloseBtnCol onClick={handleClose}>
                    <IoMdClose />
                </CloseBtnCol>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={12}>
                        <ModalInfoCol>
                            <ModalInfoLeftBox>
                                <p>
                                    <span>
                                        <IoDocumentTextOutline />
                                        Project : 
                                    </span>
                                    <Link href="#">
                                        {project.project}
                                    </Link>
                                </p>
                                <p>
                                    <span>
                                        <CiUser />
                                        Client : 
                                    </span>
                                    <Link href="#">
                                        {project.client}
                                    </Link>
                                </p>
                            </ModalInfoLeftBox>
                            <ModalInfoRightBox>
                                <p>
                                    <span>
                                        <IoCodeSlashOutline />
                                        Language : 
                                    </span>
                                    <Link href="#">
                                        {project.language}
                                    </Link>
                                </p>
                                <p>
                                    <span>
                                        <LuExternalLink />
                                        Preview : 
                                    </span>
                                    <a className='prevBtn' href={project.previewUrl}>
                                        {project.previewUrl}
                                    </a>
                                </p>
                            </ModalInfoRightBox>
                        </ModalInfoCol>

                        <ModalImgDescCol>
                            {
                                project.youtubeUrl &&
                                <iframe width="100%" height="315" src={project.youtubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            }

                            {
                                project.imageUrl &&
                                <img
                                    src={project.imageUrl}
                                    alt=""
                                />
                            }

                            {
                                project.description &&
                                <p>{project.description}</p>
                            }
                            
                        </ModalImgDescCol>
                    </Col>
                </Row>
            </Modal.Body>
        </WorkModalSection>
    )
}
export default PortfolioDetailsDialog;