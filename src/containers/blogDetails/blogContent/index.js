import React from "react"
import {
    BlogContentWrapper, BlogImgCol, BlogHeader, BlogContentCol, BlogDetailsCol, FlexLayout, PostedBy,
    SocialShareLayout, FlexBox, FlexCol, FbIcon, LinIcon, TwtIcon, InstaIcon,
    QuoteCol
} from "./blogcontent.style"
import { Container } from "react-bootstrap"
import { Link } from "gatsby-link"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogContentSection = () => {
    const data = useStaticQuery(graphql`
        query{
            allBlogDetailsJson {
                nodes {
                  blogData {
                    blogImg{
                      childImageSharp{
                        gatsbyImageData(quality:100)
                      }
                    }
                    title
                    postedBy
                    postedOn
                    desc1
                    descImgs {
                      childImageSharp{
                        gatsbyImageData(quality:100)
                      }
                    }
                    desc2
                    desc3 {
                      title
                      desc3Desc
                      quote
                      other
                    }
                    author {
                      authorName
                      authorDesc
                    }
                  }
                }
              }
        }
    `);

    const blogDetailsData = data.allBlogDetailsJson.nodes[0].blogData;

    return (
        <BlogContentWrapper>
            <Container>
                <BlogContentCol>
                    <BlogImgCol>
                        <GatsbyImage
                            image={blogDetailsData.blogImg.childImageSharp.gatsbyImageData}
                            alt="blog Image 1"
                            className="blog-details-img"
                        />
                    </BlogImgCol>
                    <BlogHeader>
                        <h1>{blogDetailsData.title}</h1>
                        <FlexLayout>
                            <PostedBy>
                                <p>by:<span> {blogDetailsData.postedBy}</span></p>
                                <p>Posted on: <span>{blogDetailsData.postedOn}</span></p>
                            </PostedBy>
                            <SocialShareLayout>
                                <ul>
                                    <li><Link href="#"><FbIcon /></Link></li>
                                    <li><Link href="#"><LinIcon /></Link></li>
                                    <li><Link href="#"><TwtIcon /></Link></li>
                                    <li><Link href="#"><InstaIcon /></Link></li>
                                </ul>
                            </SocialShareLayout>
                        </FlexLayout>
                    </BlogHeader>
                    <BlogDetailsCol>
                        {
                            blogDetailsData &&
                            blogDetailsData.desc1.map((item) => {
                                return (
                                    <p>
                                        {item}
                                    </p>
                                )
                            })
                        }

                        <FlexBox>
                            {
                                blogDetailsData.descImgs &&
                                blogDetailsData.descImgs.map((item)=>{
                                    return (
                                        <FlexCol>
                                            <GatsbyImage
                                                image={item.childImageSharp.gatsbyImageData}
                                                alt="blog Image 1"
                                                className="blog-details-smallimg"
                                            />
                                        </FlexCol>
                                    )
                                })
                            }
                        </FlexBox>

                        <p>{blogDetailsData.desc2[0]}</p>
                        <ul>
                            {
                                blogDetailsData.desc2 &&
                                blogDetailsData.desc2.slice(1).map((item)=>{
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                            
                        </ul>

                        <h2>{blogDetailsData.desc3.title}</h2>
                        <p>{blogDetailsData.desc3.desc3Desc}</p>

                        <QuoteCol>
                            <h5>"{blogDetailsData.desc3.quote}"</h5>
                        </QuoteCol>
                        {
                            blogDetailsData.desc3.other &&
                            blogDetailsData.desc3.other.map((item)=>{
                                return(
                                    <p>
                                        {item}
                                    </p>
                                )
                            })
                        }
                        
                    </BlogDetailsCol>
                </BlogContentCol>
            </Container>
        </BlogContentWrapper>
    )
}
export default BlogContentSection;
