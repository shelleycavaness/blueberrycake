import styled from "styled-components"
import {device} from "../../globalComponents/device"
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";

export const BlogWrapper = styled.section`
    padding:0px 0px 100px;

    @media screen and ${device.tablet}{
        padding-bottom: 80px;
    }
`;
export const Pagination = styled.div`
    padding-top:20px;
    
    ul{
        padding:0px;
        margin:0px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap: wrap;
    }
    ul li{
        list-style:none;
        display:inline-block;
        margin:5px 10px;

        @media screen and ${device.tablet}{
            margin:5px;
        }
    }
    ul li a{
        background:#ffeaef;
        color:#1c1c1c;
        width:60px;
        height:60px;
        border-radius:100%;
        display:flex;
        font-size:20px;
        align-items:center;
        justify-content:center;
        text-decoration: none;
        transition: all .5s;
        &:hover{
            transform:scale(1.1);
            transition: all .5s;
        }

        @media screen and ${device.tablet}{
            width:35px;
            height:35px;
            font-size:15px;
        }
    }
    ul li:first-child a{
        background:#fafafa;
    }
    ul li:last-child a{
        background:#fafafa;
    }

`;
export const LeftIcon = styled(CgChevronLeft)`
    width:30px;
    color:#ff406c;
`;
export const RightIcon = styled(CgChevronRight)`
    width:30px;
    color:#ff406c;
`;
export const BlogListCol = styled.a`
    margin-bottom:60px;
    text-decoration: none;
    display: block;
    .blog-img{
        margin-bottom:30px;
        position: relative;
        overflow: hidden;

        &:before{
            position:absolute;
            top:0;
            left:-85%;
            display:block;
            content:'';
            width:50%;
            height:100%;
            background:-o-linear-gradient(left,rgba(255,255,255,0) 0,rgba(255,255,255,.8) 100%);
            background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),to(rgba(255,255,255,.8)));
            background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,.8) 100%);
            -webkit-transform:skewX(-25deg);
            -ms-transform:skewX(-25deg);
            transform:skewX(-25deg);
            z-index:100;
        }

        @-webkit-keyframes shine {
            100% {
            left: 125%;
            }
        }
        
        @keyframes shine {
            100% {
            left: 125%;
            }
        }
    }
    
    &:hover .blog-img:before{
        -webkit-animation: 1s shine;
        animation: 1s shine;
    }

    &:hover h5{
        color:${({theme})=>theme.secondaryColor};
        transition: all .5s;
    }
    
    .blog-img{
        width:100% !important;
        height:300px !important;
        object-fit:cover;
    }
    h5{
        margin-bottom:15px;
        font-weight:600;
        transition: all .5s;
    }
    p{
        font-size:15px;
        line-height:1.7;
    }
`;
