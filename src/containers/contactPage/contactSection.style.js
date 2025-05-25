import styled from "styled-components"
import {device} from "../../globalComponents/device"

export const BannerWrapper = styled.section`
    padding: 0px 0px 100px;

    @media screen and ${device.tablet}{
        padding: 0px 0px 80px;
    }
`;
export const BannerFormCol = styled.div`
    padding:50px;
    border:1px solid ${({theme})=>theme.secondaryColor};

    @media screen and ${device.tablet}{
        padding:30px;
    }

`;
export const FormLeftCol = styled.div`
    h3{
        text-transform:uppercase;
        margin-bottom:50px;
    }
    padding-right:30px;
    @media screen and ${device.tablet}{
        padding-right:0px;
    }
`;
export const AddressCol = styled.div`
    margin-bottom:30px;

    &:last-child{
        margin-bottom: 0;
    }

    @media screen and ${device.laptop}{
        &:last-child{
            margin-bottom: 30px;
        }

    }
    
    h5{
        text-transform:uppercase;
        margin-bottom:10px;
    }

    p{
        margin-bottom:5px;
        color:${({theme})=>theme.textColor};
    }
    p span{
        color: ${({theme})=>theme.secondaryColor};
    }
`;
export const FormRightCol = styled.div`

`;
export const FormGroupBtnCol = styled.div`
    button{
        border: none;
        border-radius: 0px;
        background: ${({theme})=>theme.secondaryColor};
        padding: 12px 30px;
        color: #fff;
        text-transform: uppercase;

        text-align: center;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        position: relative;

        span {
        position: relative; 
        z-index: 1;
        transition: all .5s ease-in-out;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
        width: 140%;
        background: ${({ theme }) => theme.primaryColor};
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    &:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
    &:hover span{
        color: ${({ theme }) => theme.secondaryColor};
        transition: all .5s ease-in-out;
    }
    }
`;
export const FormGroup = styled.div`
    margin-bottom:20px;

    input[type="text"]{
        width:100%;
        padding:10px;
        border:1px solid ${({theme})=>theme.borderColor};
    }
    input[type="email"]{
        width:100%;
        padding:10px;
        border:1px solid ${({theme})=>theme.borderColor};
    }
    textarea{
        width:100%;
        padding:10px;
        border:1px solid ${({theme})=>theme.borderColor};
        height:120px;
    }
    span{
        color:red;
        font-size:13px;
        display:inline-block;
    }
`;
