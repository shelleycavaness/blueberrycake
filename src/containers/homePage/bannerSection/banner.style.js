import styled from 'styled-components';
import {device} from "../../../globalComponents/device";
import { Commonbtn } from '../../../globalComponents/common.style';

export const BannerWrapper = styled.section`
    position:relative;
    padding: 80px 0px 100px;
    display:flex;
    align-items:center;
`;
export const BannerCol = styled.div`
    display:flex;
    align-items:flex-start;

    @media screen and ${device.tablet}{
        flex-direction: column-reverse;
    }
`;
export const BannerImage = styled.div`
    flex-shrink:0;
    width:40%;
    position:relative;

    .banner-image{
        height:420px !important;
        width:100% !important;
        object-fit:cover;
    }

    @media screen and ${device.tablet}{
        width:300px;
        height:300px;
        margin:auto;
        border-radius: 100%;

        .banner-image{
            width:300px !important;
            height:300px !important;
            border-radius: 100%;
        }
    }
`;
export const ImageBackground = styled.div`
    background:transparent;
    height:90%;
    width:90%;
    position:absolute;
    top:-15px;
    right:-15px;
    border-top:15px solid ${({theme})=>theme.secondaryColor};
    border-right:15px solid ${({theme})=>theme.secondaryColor};

    @media screen and ${device.tablet}{
        top:0;
        right:0;
    }
`;
export const ImageBackground2 = styled.div`
    background:transparent;
    height:90%;
    width:90%;
    position:absolute;
    bottom:-15px;
    left:-15px;
    border-bottom:15px solid ${({theme})=>theme.secondaryColor};
    border-left:15px solid ${({theme})=>theme.secondaryColor};

    @media screen and ${device.tablet}{
        bottom:0;
        left:0;
    }
`;
export const BannerContent = styled.div`
    width:60%;
    padding-right:60px;
    position:relative;
    padding-top:10px;

    @media screen and ${device.tablet}{
        margin-top: 40px;
        width:100%;
        padding-right: 0;
        text-align:center;
    }

    h1{
        font-size:50px;
        line-height:56px;
        text-transform:uppercase;
        margin-bottom:5px;
    }

    h2{
        text-transform:uppercase;
        font-size:40px;
        color:${({theme}) => theme.secondaryColor};
        line-height:46px;
        margin-bottom:40px;
    }
    p{
        font-size:18px;
        margin-bottom:40px;
    }
    span{
        font-size:15px;
        color:${({theme}) => theme.textColor}
    }
`;
export const AboutMeLink = styled(Commonbtn)`
    transition: all.5s;
    &:hover span{
        color:#fff;
        transition: all.5s;
    }
`;
