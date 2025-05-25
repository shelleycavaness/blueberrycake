import styled from "styled-components"
import {device} from "../../../globalComponents/device";
import { BiLogoTwitter, BiLogoFacebook, BiLogoLinkedin, 
    BiLogoInstagram} from "react-icons/bi";

export const BlogContentWrapper = styled.section`
    padding-bottom:40px;
`;
export const BlogContentCol = styled.div`
    max-width:850px;
    margin:auto;
`;
export const BlogImgCol = styled.div`
    margin-bottom:30px;
    margin-top:30px;

    .blog-details-img{
        width:100% important;
        height:400px !important;
        object-fit:cover;

        @media screen and ${device.tablet}{
            height:300px !important;
        }
    }
`;
export const BlogHeader = styled.div`
    @media screen and ${device.tablet}{
        h1{
            font-size: 40px;
        }
    }
`;
export const FlexLayout = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media screen and ${device.tablet}{
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const SocialShareLayout = styled.div`
    ul{
        padding:0px;
        margin:0px;
        text-align:center;
        margin-bottom:30px;
        list-style:none;
    }
    ul li{
        list-style:none;
        display:inline-block;
        margin:0px 7px;

        @media screen and ${device.mobileL}{
            &:first-child{
                margin-left: 0;
            }
        }
    }
    svg{
        font-size:30px;
        padding:5px;
        border-radius:8px;
        color:#fff;
    }
    
`;
export const PostedBy = styled.div`
    display:flex;
    margin-bottom:20px;

    p:first-child{
        margin-right:50px;
        @media screen and ${device.mobileL}{
            margin-right:20px;
        }
    }
    p span{
        color:${({theme})=>theme.secondaryColor};
    }
    p{
        line-height:1.7;
        margin-bottom:10px;
    }

`;
export const BlogDetailsCol = styled.div`
    h1{
        margin-bottom:20px;
    }
    h2{
        margin-top:30px;
        margin-bottom:20px;
        font-weight:600;
    }
    p{
        font-size:18px;
        margin-bottom:30px;
    }
    ul{
        padding:0px;
        margin:0px;
    }
    ul li{
        list-style:none;
        display:inline-block;
        text-indent: -15px;
        padding-left: 15px;
        font-size:18px;

        &:before{
            content:"";
            width: 5px;
            height: 5px;
            display: inline-block;
            background-repeat: no-repeat;
            top: -4px;
            position: relative;
            background-color: #fff;
            margin-right: 10px;
        }
    }
`;
export const FlexBox = styled.div`
    display:flex;
    margin-left:-10px;
    margin-right:-10px;
    margin-bottom:30px;
    margin-top:30px;
    flex-wrap: wrap;

    @media screen and ${device.mobileL}{
        margin-bottom: 10px;
    }
`;
export const FlexCol = styled.div`
    padding:0px 10px;
    width:25%;

    .blog-details-smallimg{
        width:100% !important;
        height:250px !important;
        object-fit: cover !important;
    }

    @media screen and ${device.mobileL}{
        width:50%;
        margin-bottom: 20px;
    }

`;
export const QuoteCol = styled.div`
    background:${({theme})=>theme.cardBackgroundColor};
    padding:30px;
    margin-top:30px;
    margin-bottom:30px;

    h5{
        font-style:italic;
        margin-bottom:0;
        letter-spacing:1px;
        color:${({theme})=>theme.textColor};
    }
`;
export const FbIcon = styled(BiLogoFacebook)`
    background:#0054a5;
`;
export const LinIcon = styled(BiLogoLinkedin)`
    background:#0077a2;
`;
export const TwtIcon = styled(BiLogoTwitter)`
    background:#00bef2;
`;
export const InstaIcon = styled(BiLogoInstagram)`
    background:#ed008c;
`;
