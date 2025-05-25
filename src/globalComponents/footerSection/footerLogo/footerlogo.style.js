import styled from "styled-components";

export const FooterLogoWrapper = styled.div`

`;

export const FooterLogoBgLayout = styled.div`
    display:flex;
    align-items:center;

    .before-border{
        margin: 0;
        height: 2px;
        background: ${({theme})=>theme.borderColor};
        width: 100%;
        margin-right: 15px;
        opacity: 0.06;
    }
    .after-border{
        margin: 0;
        height: 2px;
        background: ${({theme})=>theme.borderColor};
        width: 100%;
        margin-left: 15px;
        opacity: 0.06;
    }
    .thedot{
        height: 7px;
        width: 7px;
        background: ${({theme})=>theme.borderColor};
        opacity: 0.06;
        border-radius: 100%;
        flex-shrink: 0;
    }
    span{
        font-size: 110px;
        font-weight: 900;
        display:block;
        line-height:0;
        text-transform: uppercase;
        font-family: 'Outfit',sans-serif;
        color: ${({theme})=>theme.textColor};
        opacity: 1;
        flex-shrink:0;
        width:225px;
        margin-bottom:0px;
        transition:all .5s;
        
        img{
            
        }
    }
`;