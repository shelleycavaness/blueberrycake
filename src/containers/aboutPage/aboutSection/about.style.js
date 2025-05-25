import styled from "styled-components";
import { Commonbtn } from '../../../globalComponents/common.style';
import { device } from "../../../globalComponents/device";

export const AboutWrapper = styled.div`
    padding:0px 0px 100px 0px;

    @media screen and ${device.laptopM}{
        padding-bottom: 80px;
    }
`;
export const AboutCol = styled.div`
    .row{
        align-items:center; 
    }
`;
export const AboutLeftCol = styled.div`
    .image{
        height: 500px !important;
        object-fit: cover !important;

        @media screen and ${device.laptopM}{
            /* border-radius: 100%; */
            margin-bottom: 40px;
        }
    }
`;
export const AboutRightCol = styled.div`
    padding-left: 60px;
    @media screen and ${device.laptopM}{
        padding-left: 10px;
    }
    @media screen and ${device.laptopM}{
       padding-left: 0;
    }
    h2{
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    .aboutSubHeading{
        display: block;
        margin-bottom: 30px;
        font-size: 22px;
        color:${({theme})=>theme.secondaryColor};
        text-transform:uppercase;
    }
    p{
        margin-bottom: 30px;
        line-height: 1.7;
    }
`;
export const AboutBtn = styled(Commonbtn)`
    svg{
        margin-left: 10px;
    }
`;