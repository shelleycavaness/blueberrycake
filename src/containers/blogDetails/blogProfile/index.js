import React from "react"
import {BlogProfileWrapper,BlogProfileCol,
    AuthorCol
} from "./blogprofile.style"
import {Container, Row, Col} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogProfileSection = () => {
    const data = useStaticQuery(graphql`
        query{
            allBlogDetailsJson {
                nodes {
                  blogData {
                    author {
                        authorImg{
                            childImageSharp{
                              gatsbyImageData(quality:100)
                            }
                          }
                        authorName
                        authorDesc
                    }
                  }
                }
              }
        }
    `);

    const profileData = data.allBlogDetailsJson.nodes[0].blogData.author;
    return(
        <BlogProfileWrapper>
            <Container>
                <Row>
                    <Col md="12">
                        <BlogProfileCol>
                            <AuthorCol>
                                <GatsbyImage
                                    image={profileData.authorImg.childImageSharp.gatsbyImageData}
                                    alt="blog Image 1"
                                    className="blog-img-author"
                                />
                                <span>
                                    <h5>Author : {profileData.authorName}</h5>
                                    <p>{profileData.authorDesc}</p>
                                </span>
                            </AuthorCol>
                        </BlogProfileCol>
                    </Col>
                </Row>
            </Container>
        </BlogProfileWrapper>
    )
}
export default BlogProfileSection;
