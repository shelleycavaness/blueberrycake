import styled from "styled-components"
import {device} from "../../../globalComponents/device";

export const BlogProfileWrapper = styled.section`
`;
export const BlogProfileCol = styled.div`
    max-width:850px;
    margin:auto;
`;
export const AuthorCol = styled.div`
    background:${({theme})=>theme.cardBackgroundColor};
    display:flex;
    align-items:center;
    padding:25px;
    margin-bottom:60px;
    @media screen and ${device.tablet}{
        margin-bottom:40px;
    }
    @media screen and ${device.mobileL}{
        flex-direction: column;
        align-items: flex-start;
    }
    .blog-img-author{
        flex-shrink:0;
        margin-right:25px;
        @media screen and ${device.mobileL}{
            margin-bottom:20px;
        }
    }
    .blog-img-author{
        width:100px !important;
        height:100px !important;
    }
    h5{
        text-transform:uppercase;
        margin-bottom:10px;
    }
    span{
        display:block;
    }
    span p{
        margin-bottom:0px;
    }
`;