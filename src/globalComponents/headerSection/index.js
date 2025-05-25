import React, { useEffect, useState } from "react";
import { HeaderWrapper, HeaderContainer } from "./header.style"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { useLocation } from '@reach/router';
import { getThemeName } from "../themes";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HeaderSection = () => {
    const router = useLocation();
    const [sticky, setSticky] = useState(false);

    const checkActiveClass = (path) => {
        if (router.pathname === "/"+path+"/" ||
            router.pathname === "/"+path + "-light/") {
            return "active";
        }
        return "";
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY >= 100 ? setSticky(true) : setSticky(false)
        })
    }, [sticky])

    const data = useStaticQuery(graphql`
    query{
        headerJson{
                lightLogo{
                    childImageSharp{
                        gatsbyImageData(quality:100)
                    }
                }
                darkLogo{
                    childImageSharp{
                        gatsbyImageData(quality:100)
                    }
                }
                headerMenus {
                  Home
                  About
                  Portfolio
                  Blog
                  Contact
                }
          }
    }
    `);

    const headerData = data.headerJson;
    const headerMenus = Object.entries(headerData.headerMenus);
    return (
        <HeaderWrapper>
            <HeaderContainer className={sticky ? "stickyHeader" : ""}>
                <Container>
                    <Row>
                        <Col md="12">
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="/">
                                    <GatsbyImage
                                        image={getThemeName() === "light" ? headerData.lightLogo.childImageSharp.gatsbyImageData : headerData.darkLogo.childImageSharp.gatsbyImageData}
                                        alt="Brand Logo"
                                        style={{
                                            maxWidth: "225px",
                                            marginBottom: "0px",
                                            transition: "all .5s"
                                        }}
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        {
                                            headerMenus &&
                                            headerMenus.map((menuItem) => {
                                                return (
                                                    <Nav.Link
                                                        className={checkActiveClass(`${menuItem[1]}`)}
                                                        href={getThemeName() === "light" ? `/${menuItem[1]}-light/` : `/${menuItem[1]}/`}>
                                                        {menuItem[0]}
                                                    </Nav.Link>
                                                )
                                            })
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
        </HeaderWrapper>
    )
}
export default HeaderSection;
