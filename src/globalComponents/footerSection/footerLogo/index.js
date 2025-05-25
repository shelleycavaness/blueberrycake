import React from "react";
import { FooterLogoWrapper, FooterLogoBgLayout } from "./footerlogo.style";
import { getThemeName } from "../../themes.js";
import { GatsbyImage } from "gatsby-plugin-image";

const FooterLogo = ({lightLogoPath, darkLogoPath})=>{
    return(
        <FooterLogoWrapper>
            <FooterLogoBgLayout>
                <div className="thedot"/>
                <hr className = "before-border"/>
                <span>
                    <GatsbyImage
                        image = {getThemeName() === "light"? lightLogoPath :darkLogoPath}
                        alt="Brand Logo"
                    />
                </span>
                <hr className = "after-border"/>
                <div className="thedot"/>
            </FooterLogoBgLayout>
        </FooterLogoWrapper>
    )
}
export default FooterLogo;