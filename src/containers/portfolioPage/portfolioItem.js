import React from "react"
import { ContentCol, ImgHolder, LinkIcon, WorkCol } from "./portfolioItem.style";
import { GatsbyImage } from "gatsby-plugin-image";

const PortfolioItem = (props) => {
    const { imageSrc, alt, title, tag } = props;

    return <WorkCol>
        <ImgHolder>
            <GatsbyImage
                image={imageSrc}
                alt={alt}
                className="portfolio"
            />
        </ImgHolder>
        <ContentCol as="button">
            <div>
                <h5>{title}</h5>
                {
                    tag &&
                    <p>{tag}</p>
                }
                <LinkIcon />
            </div>
        </ContentCol>
    </WorkCol>
}

export default PortfolioItem;