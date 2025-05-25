import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { device } from "../device";


export const WorkModalSection = styled(Modal)`

    .modal-dialog{
        /* max-width:80%; */
        max-width:900px;
        margin:100px auto 0px;        
    }
    .modal-content{
        height: 75vh;
        max-width:900px;
        margin:0 auto;
        background:${({ theme }) => theme.backgroundColor};
        border-radius: 30px;
        border: none;
    }
    .modal-header{
        border:none;
        text-align: center;
    }
    .modal-body{
        height: 500px;
        padding-left: 30px;
        padding-right: 30px;
        overflow-y: auto;
        color:${({ theme }) => theme.textColor};

        &::-webkit-scrollbar {
            width: 3px;
        }
        &::-webkit-scrollbar-track {
            background:${({ theme }) => theme.cardColor};
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.secondaryColor};
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }

    .btn-close{
        color:${({ theme }) => theme.secondaryColor};
    }

    h4{
        text-align: center;
        text-transform: uppercase;
        margin-bottom:10px;

        @media screen and ${device.mobileM}{
            font-size: 22px;
        }
    }

    .modal-title{
        text-align: center;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 0;
        h3{
            text-align: center;
        }

        @media screen and ${device.mobileXL}{
            padding-top: 20px;
            padding-bottom: 0px;
        }
    }
`;

export const CloseBtnCol = styled.div`
    position: absolute;
    right: -30px;
    top: -30px;
    color:${({ theme }) => theme.textColor};
    border:3px solid ${({ theme }) => theme.secondaryColor};
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor:pointer;

    @media screen and ${device.mobileM}{
        right:-20px;
        top:-20px;
        height: 30px;
        width:30px;
        border-width: 2px;
    }
    svg{
        font-size: 20px;
        @media screen and ${device.mobileM}{
            font-size: 20px;
        }
    }
`;

export const ModalInfoCol = styled.div`
    display: flex;
    @media screen and ${device.mobileXL}{
        flex-direction: column;
    }
    p{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        @media screen and ${device.mobileM}{
            flex-direction: column;
        }
        
        a{
            margin-left: 5px;
            text-decoration: none;
            color:${({ theme }) => theme.textColor};
        }

        svg{
            font-size: 17px;
            margin-right: 5px;
            transform: translateY(-10%);
        }
        span{
            @media screen and ${device.mobileM}{
                display: block;
            }
        }

    }

    .prevBtn{
        color:${({ theme }) => theme.secondaryColor};
        text-decoration:underline;

        &:hover{
            text-decoration: none;
        }
    }
`;

export const ModalInfoLeftBox = styled.div`
    width:50%;
    @media screen and ${device.mobileXL}{
        width:auto;
    }
    @media screen and ${device.mobileM}{
        width:100%;
    }
`;

export const ModalInfoRightBox = styled.div`
    width:50%;
    @media screen and ${device.mobileXL}{
        width:auto;
    }
`;

export const ModalImgDescCol = styled.div`
    iframe{
        margin:20px 0px;
    }
    .image{
        margin-bottom: 20px;
    }
    p{

    }
`;
