import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        background:${({theme}) => theme.backgroundColor};

        .ReactModal__Overlay{
            z-index:9999 !important;
        }
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};
    }
    input, button, textarea{
        font-family: 'Outfit', sans-serif;
    }
    h1{
        font-size:48px;
        line-height:54px;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};

    }
    h2{
        font-size: 42px;
        line-height:48px;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};
    }
    h3{
        font-size: 36px;
        line-height:42px;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};
        // text-transform:uppercase;
    }

    h4{
        font-size:30px;
        line-height:36px;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};
    }
    h5{
        font-size:22px;
        line-height:28px;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};
    }
    h6{
        font-size:18px;
        line-height:24px;
        margin-bottom:20px;
        color:${({theme}) => theme.textColor};
    }

    p{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color:${({theme}) => theme.textColor};
        margin-bottom:20px;
        font-size:16px;
        line-height:1.45;
    }
    ul li{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color:${({theme}) => theme.textColor};
        margin-bottom:20px;
        font-size:16px;
        line-height:1.45;
    }
    a{
        font-size:16px;
        font-family: 'Inter', sans-serif;
        font-weight:400;
        transition: all .5s;
    }
    a&:hover{
        transition: all .5s;
    }
    img{
        margin-bottom:0px;
        object-fit:cover;
        width:100%;
    }
    .m-b-0{
        margin-bottom: 0px !important;
    }
    .green{
        color:green;
    }
`;


export default GlobalStyle;
