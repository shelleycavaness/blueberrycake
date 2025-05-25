import styled from "styled-components";
import {device} from "../../../globalComponents/device";

export const ServicesWrapper = styled.section`
    padding:0px 0px 100px;

    @media screen and ${device.tablet}{
        padding:0px 0px 40px;
    }
`;

export const ServicesHeading = styled.div`
    text-align:center;
    margin-bottom:75px;

    h2{
        text-transform:uppercase;
    }
`;
export const ServicesTextCol = styled.div`
    h4{
        text-transform:uppercase;
        margin-bottom:25px;
    }
    p{
        margin-bottom:0;
    }
`;
export const ServicesRow = styled.div`

`;
export const ServicesCol = styled.div`
    position:relative;
    overflow:hidden;
    transition: all .3s;
    padding:0px 20px;
    text-align:center;

    .service-icon{
        height: 70px !important;
        width: auto !important;
        margin-bottom: 30px;
    }

    @media screen and ${device.tablet}{
        margin-bottom:40px;
    }

`;