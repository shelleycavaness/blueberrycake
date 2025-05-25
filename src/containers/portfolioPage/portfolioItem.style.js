
import styled from "styled-components";
import { BiLink } from "react-icons/bi";

export const ContentCol = styled.a`
    position:absolute;
    top: 50%;
    left: 50%;
    width:100%;
    height:calc(100% + 1px);
    display:flex;
    align-items:center;
    flex-direction:row;
    background:${({ theme }) => theme.secondaryColor+"cc"};
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
    transition: all 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
    z-index:1;
    text-decoration:none;
    box-shadow:none;
    border:none;

    div{
        width:100%;
        text-align:center;
    }
    h5{
        margin-bottom:5px;
    }
    p{
        margin-bottom:0px;
    }
    svg{
        color: ${({ theme }) => theme.secondaryColor};
        font-size:50px;
        border-radius: 50%;
        padding:10px;
        line-height: 60px;
        background: #ffffff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        margin-top:10px;
    }
`;
export const WorkCol = styled.div`
    margin-bottom:40px;
    position:relative;
    overflow: hidden;
    
    &:hover ${ContentCol}{
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        transition: all 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;
export const LinkIcon = styled(BiLink)`
    font-size:60px;
`;
export const ImgHolder = styled.div`
    /* margin-bottom:10px; */
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
    }
`;