import styled from "styled-components"
import {device} from "../../globalComponents/device"

export const BlogWrapper = styled.section`
    padding:0px 0px 60px;

    @media screen and ${device.tablet}{
        padding-bottom: 40px;
    }
    
    .nav-tabs .nav-link{
        border-radius: 0;
        border: 2px solid ${({theme})=>theme.secondaryColor};
        color: ${({theme})=>theme.textColor};
    }
    .nav-link.active{
        border-radius: 0;
        color: #fff;;
        background: ${({theme})=>theme.secondaryColor};
    }
    .nav-item{
        margin-right: 20px;
        button{
            text-transform: uppercase;
        }

        &:hover{
            background: ${({theme})=>theme.secondaryColor};
            transition: all .5s;
        }
    }
    .nav-tabs{
        border: none;
        justify-content: center;
        margin-bottom: 20px;
    }
`;
