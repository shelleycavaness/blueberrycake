import styled from "styled-components"
import {device} from "../../../globalComponents/device"

export const ReviewSectionWrapper = styled.section`
    padding:0px 0px 100px;
    overflow: hidden;
    @media screen and ${device.tablet}{
        padding:0px 0px 80px;
    }
`;
export const SliderWrapper = styled.div`
    margin:0px -30px;
`;
export const SlideCol = styled.div`
    padding:0px 30px;
    width:100%;
`;
export const SlideProfile = styled.div`
    display:flex;
    align-items:center;
    margin-top:30px;
    margin-left:30px;

    .author{
        width:80px !important;
        height:80px !important;
        border-radius:100%;
        margin-right:15px;
        flex-shrink:0;
    }
    h4{
        text-transform:uppercase;
        margin-bottom:5px;
    }
    p{
        margin-bottom:0px;
        opacity:0.8;
    }
`;
export const SlideProfileDesc = styled.div`
    position:relative;
    padding:40px;
    border:1px solid ${({theme}) => theme.secondaryColor};

    @media screen and ${device.tablet}{
        padding:25px;
    }
    
    p{
        font-size:15px;
        line-height:1.6;
        margin-bottom:0px;
    }
    &:before{
        position: absolute;
        content: "";
        height: 0px;
        width: 0px;
        top: 100%;
        left: 80px;
        border: solid transparent;
        border-top-color:${({theme}) => theme.secondaryColor};
        border-width: 18px 18px 0px 0px;
    }
    &:after{
        position: absolute;
        content: "";
        top: 100%;
        left: 80px;
        height: 0px;
        width: 0px;
        border: solid transparent;
        border-top-color: ${({theme}) => theme.backgroundColor};
        border-width: 14px 13px 0px 0px;
        margin-left: 2px;
    }
`;
