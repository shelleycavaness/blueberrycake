import styled from "styled-components";
import { device } from "../../../globalComponents/device";

export const BiodataWrapper = styled.div`
    padding-bottom: 80px;

    @media screen and ${device.tablet}{
        padding-bottom: 60px;
    }
`;
export const BioDataBox = styled.div`
    overflow: hidden;
    .row{
        align-items: center;
        margin-top: -20px;

        @media screen and ${device.laptopM}{
            margin-top: 0px;
        }
    }
`;
export const BioLeftBox = styled.div`
    h3{
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`;
export const BioTableBox = styled.div`
    display: flex;
    @media screen and ${device.mobileL}{
        flex-direction: column;
    }
    p{
        display: flex;
        /* align-items: center; */
    }
    p span{
        opacity: .8;
        font-size: 18px;
        width:120px;
        line-height: 1;

        @media screen and ${device.laptopM}{
            width:100px;
        }

        @media screen and ${device.tablet}{
            font-size: 16px;
            width: 80px;
        }

        @media screen and ${device.mobileL}{
            width: 100px;
        }

    }
    p strong{
        @media screen and ${device.tablet}{
            font-size: 15px;
        }
    }
    p i{
        font-style: normal;
    }
`;
export const BioTableLeftBox = styled.div`
   width : 50%;     
   @media screen and ${device.mobileL}{
        width: 100%;
    }
`;
export const BioTableRightBox = styled.div`
   width : 50%;
   @media screen and ${device.mobileL}{
        width: 100%;
    }
`;
export const BioRightBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and ${device.laptopM}{
        margin:0px -20px;
    }
`;
export const CounterBox = styled.div`
    h2{
        color:${({theme})=>theme.secondaryColor};
        @media screen and ${device.mobileL}{
            font-size: 35px;
        }
    }
    width:calc(50% - 40px);
    background:red;
    margin:20px;
    background-color: ${({theme})=>theme.cardBackgroundColor};
    padding:25px;

    @media screen and ${device.laptopM}{
        width:calc(50% - 20px);
        margin:10px;
    }
    @media screen and ${device.laptop}{
        width:calc(50% - 40px);
        margin:20px;
    }
    @media screen and ${device.laptopM}{
        width:calc(50% - 15px);
        margin:7.5px;
    }
    p{
        &:before{
            content:"";
            border-top: 1px solid ${({theme})=>theme.secondaryColor};
            width: 25px;
            display: block;
            flex-shrink: 0;
            margin-right: 10px;
            transform: translateY(25%);

            @media screen and ${device.mobileL}{
                width: 15px;
            }
        }
        display: flex;
        margin-bottom: 0px;
        text-transform: uppercase;

        @media screen and ${device.mobileL}{
            font-size: 15px;
        }
    }
`;