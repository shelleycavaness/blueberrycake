import React from "react";
import styled from "styled-components";
import { device } from "./device";

const SectionHeadingLayout = styled.div`
    position:relative;
    text-align: center;
    margin-bottom:80px;

    @media screen and ${device.tablet}{
        margin-bottom:60px;
    }
    
    h2{
        margin-bottom:0;
        line-height:1;
        position:absolute;
        top:50%;
        left: 0;
        right: 0;
        transform:translateY(-50%);
        letter-spacing:1px;

        @media screen and ${device.tablet}{
            font-size: 30px;
        }

        @media screen and ${device.mobileM}{
            font-size: 25px;
        }
    }
`;

export const TitleBgLayout = styled.div`
    display:flex;
    align-items:center;

    .before-border{
        margin: 0;
        height: 2px;
        background: ${({theme})=>theme.borderColor};
        width: 100%;
        margin-right: 15px;
        opacity: 0.06;
    }
    .after-border{
        margin: 0;
        height: 2px;
        background: ${({theme})=>theme.borderColor};
        width: 100%;
        margin-left: 15px;
        opacity: 0.06;
    }
    .thedot{
        height: 7px;
        width: 7px;
        background: ${({theme})=>theme.borderColor};
        opacity: 0.06;
        border-radius: 100%;
        flex-shrink: 0;
    }
    span{
        font-size: 110px;
        font-weight: 900;
        display:block;
        line-height:1;
        text-transform: uppercase;
        font-family: 'Outfit',sans-serif;
        color: ${({theme})=>theme.textColor};
        opacity: 0.06;
        flex-shrink:0;

        @media screen and ${device.tablet}{
            font-size: 60px;
        }

        @media screen and ${device.mobileM}{
            font-size: 50px;
        }

    }
`;

const SectionHeading = (props) => {
    const { title, titleBg, layoutStyles } = props;

    return <SectionHeadingLayout style={layoutStyles?{...layoutStyles}:{}}>
        <TitleBgLayout>
            <div className="thedot"/>
            <hr className = "before-border"/>
            <span>{titleBg}</span>
            <hr className = "after-border"/>
            <div className="thedot"/>
        </TitleBgLayout>
        <h2>{title}</h2>
    </SectionHeadingLayout>
}

export default SectionHeading;