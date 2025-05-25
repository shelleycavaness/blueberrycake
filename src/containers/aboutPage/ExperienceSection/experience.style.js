import styled from "styled-components";
import { device } from "../../../globalComponents/device";


export const ExperiencedWrapper = styled.div`
    padding-bottom: 40px;
`;

export const ExperiencedHeadingCol = styled.div`

`;
export const ExperienceTimeLineWrapper = styled.div`
    position: relative;
    @media screen and ${device.laptop}{
        &:after{
            content: "";
            display: block;
            border-left: 1px solid ${({theme})=>theme.borderColor};
            height: 100%;
            position: absolute;
            top: 0;

        }
    }
`;
export const TimelineCol = styled.div`
    position: relative;

    &:after{
        content: "";
        display: block;
        border-left: 1px solid ${({theme})=>theme.borderColor};
        height: 100%;
        position: absolute;
        top: 5px;
        opacity:0.5;

    }

    
`;
export const TimelineSingleItem = styled.div`
    text-align: left;
    position: relative;
    padding-left: 30px;
    h5{
        margin-bottom: 5px;
        text-transform: uppercase;
    }

    small{
        color:${({theme})=>theme.textColor+"aa"};
        font-weight: normal;
        font-size: 15px;
        margin-bottom:17px;
        display:block;
    }

    span{
        color:${({theme})=>theme.secondaryColor};
        display: inline-block;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 16px;
    }
    margin-bottom: 60px;

    &::after{
        content: "";
        position: absolute;
        top: 3px;
        background: ${({theme})=>theme.secondaryColor};
        width: 15px;
        height: 15px;
        border-radius: 100%;
        left: -7.5px;
        z-index: 1;
    }
`;
