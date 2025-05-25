import styled from "styled-components";
import {device} from "../device"

export const HeaderWrapper = styled.div`
    background:${({theme}) => theme.backgroundColor};
    max-height:100px;

    .bg-light{
        background:none !important;
    }
    .navbar-light .navbar-nav .nav-link{
        font-family: 'Oswald',sans-serif;
        text-transform:uppercase;
        font-weight:500;
        display: inline-block;
        color:${({theme}) => theme.textColor};
        font-size:15px;
        padding: 0px 15px;
        transition: all .5s;
        &:hover{    
            color:${({theme}) => theme.secondaryColor};
        }
    }
    .navbar{
        padding-left:0;
        padding-right:0;
        padding-top:15px;
        padding-bottom:15px;
    }

    .active.nav-link{
        display: inline-block;
        &:after{
            content: "";
            border-bottom: 4px solid ${({theme}) => theme.secondaryColor};
            display: block;
            bottom: 8px;
            position: relative;
            z-index: 0;
        }
    }
    .navbar-brand{
        margin:0;
        max-width:225px;
        transition: all .5s;

        @media screen and ${device.mobileM}{
            width:150px !important;
        }
    }
    .ml-auto.navbar-nav{
        margin-left:auto;
    }
    .stickyHeader{
        position: fixed;
        top:0;
        right:0;
        left:0;
        right:0;
        z-index: 999;
        background-color: ${({theme})=>theme.backgroundColor};

        .image{
            width: 180px !important;
        }
    }
    .navbar-toggler{
        background-color: ${({theme})=>theme.secondaryColor};
        border-radius: 0;
    }
    @media screen and ${device.laptop}{
        .navbar-collapse{
            background-color: ${({theme})=>theme.backgroundColor};
            padding-top: 10px;
        }
        .navbar-collapse .navbar-nav .nav-link{
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 7.5px;
            padding-bottom:7.5px;
            border-bottom: 1px solid ${({theme})=>theme.secondaryColor};
        }
        .navbar-collapse .navbar-nav .nav-link::after{
            content: none;
        }
        .navbar-collapse .navbar-nav .active{
            color:${({theme})=>theme.secondaryColor};
        }
    }
`;

export const HeaderContainer = styled.div`
    position: relative;
    z-index: 999;
    background-color: ${({theme})=>theme.backgroundColor};
`;