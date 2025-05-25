import React from "react"
import { BlogWrapper, BlogListCol, Pagination, LeftIcon, RightIcon } from "./blog.style"
import { Container, Row, Col } from "react-bootstrap"
import SectionHeading from "../../globalComponents/sectionHeading"
import { Link } from "gatsby-link"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogSection = () => {
    const data = useStaticQuery(graphql`
        query{
            allBlogPageJson{
                nodes{
                    blogListData {
                        id
                        blogImage{
                          childImageSharp{
                            gatsbyImageData(quality:100)
                          }
                        }
                      title
                      description
                      postedBy
                      postedOn
                      }
                }
            }
        }
    `);

    const blogData = data.allBlogPageJson.nodes[0].blogListData;
    return (
        <BlogWrapper>
            <Container>
                <SectionHeading
                    title={"Blogs"}
                    titleBg={"Articles"}
                    layoutStyles={{
                        marginTop: 40
                    }}
                />
                <Row>
                    {
                        blogData &&
                        blogData.map((item) => {
                            return (
                                <Col lg="4" md="6" key={item.id} >
                                    <BlogListCol href="/blog-details">
                                        <GatsbyImage
                                            image={item.blogImage.childImageSharp.gatsbyImageData}
                                            alt="blog Image 1"
                                            className="blog-img"
                                        />
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </BlogListCol>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Col lg="12">
                        <Pagination>
                            <ul>
                                <li><Link href="#"><LeftIcon /></Link></li>
                                <li><Link href="#">1</Link></li>
                                <li><Link href="#">2</Link></li>
                                <li><Link href="#">3</Link></li>
                                <li><Link href="#">4</Link></li>
                                <li><Link href="#"><RightIcon /></Link></li>
                            </ul>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </BlogWrapper>
    )
}
export default BlogSection;
