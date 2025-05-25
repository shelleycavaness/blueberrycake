import styled from "styled-components"
import {device} from "../../../globalComponents/device";


export const BlogSlidesWrapper = styled.section`
    padding-bottom: 80px;
    @media screen and ${device.tablet}{
        padding-bottom:60px;
    }
`;
export const SliderOuterSection = styled.div`
    max-width:850px;
    margin:auto;
    margin-top:40px;
`;
export const BlogSlides = styled.div`

`;

export const SliderSection = styled.div`
    margin: 0px -15px;
`;
export const SliderInnerWrapper = styled.div`
    padding:0px 15px;
`;

export const SlideCol = styled.div`
    .blog-details-img{
        width:100% !important;
        height:250px !important;
        margin-bottom:20px;
        object-fit:cover;
    }
    p{
        display:flex;
        span{
            margin-right:15px;
            margin-left:5px;
            color: ${({theme}) => theme.secondaryColor};
        }
    }

`;
