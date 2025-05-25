import styled from 'styled-components';
import {device} from "../../../globalComponents/device";
import { BiLink } from "react-icons/bi";

export const WorkWrapper = styled.div`
    padding:0px 0px 60px 0px;

    @media screen and ${device.tablet}{
        padding:0px 0px 40px;
    }
`;
export const WorkCol = styled.div`
    margin-bottom:50px;
`;
export const LinkIcon = styled(BiLink)`
    font-size:60px;
`;
export const ImgHolder = styled.div`
    margin-bottom:10px;
    position: relative;
    overflow: hidden;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    text-align: center;

    .portfolio{
        width:100% !important;
        height:auto !important;
        max-width: 100%;
        vertical-align: top;
        -webkit-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
    }
    
    svg{
        color: ${({theme}) => theme.secondaryColor};
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        padding:10px;
        line-height: 60px;
        background: #ffffff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
        transition: all 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
    button{
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
        background: none;
        border: none;
    }

    &:hover .portfolio{
        filter: brightness(50%);
        -webkit-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
    }

    &:hover svg {
      -webkit-transform: translate(-50%, -50%) scale(1);
      transform: translate(-50%, -50%) scale(1);
      transition: all 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;
export const ContentCol = styled.div`
    text-align:center;
    margin-top:30px;
    h5{
        margin-bottom:5px;
    }
    p{
        margin-bottom:0px;
    }
`;
