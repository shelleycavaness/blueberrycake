import styled from "styled-components"
import {device} from "../device"

export const FooterWrapper = styled.section`
    padding:0px 0px 60px;

`;

export const FooterSocial = styled.div`
    ul{
        padding:0px;
        margin:0px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px;
        flex-wrap: wrap;
    }
    ul li{
        list-style:none;
        margin:0;
    }
    ul li a{
        color: #FFFFFF;
        background:${({theme})=>theme.secondaryColor};
        width:50px;
        height:50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin:5px 20px;
        font-size: 30px;
        transition: all .5s;
        
        &:hover{
          transform: scale(1.1) rotate(20deg);
          transition: all .5s;
        }

        @media screen and ${device.laptop}{
          margin:5px 10px;
        }
    }
    ul li:last-child{
        margin-bottom:0px;
    }

    @media screen and ${device.mobileL}{
      ul{
        margin-top: 40px;
      }
      ul li a{
          margin:5px;
          width:30px;
          height:30px;
          font-size: 15px;
      }
    }
    
`;

export const BottomFooterRow = styled.div`
  margin-top: 60px;
  p{
    margin:0;
  }

  @media screen and ${device.mobileL}{
      margin-top: 40px;
    }
  
`;

export const FooterLeftCol = styled.div`
  text-align: left;
  p a{
    color:${({theme})=>theme.textColor};
    text-decoration: none;
    font-size: 17px;

    &:hover{
      color:${({theme})=>theme.secondaryColor}
    }

    @media screen and ${device.laptop}{
        font-size: 14px;
    }
  }
  
  @media screen and ${device.tablet}{
        text-align: center;
        margin-bottom: 20px;
    }
`;
export const FooterCenterCol = styled.div`
  text-align: center;
  p{
    font-size: 17px;
    @media screen and ${device.laptop}{
        font-size: 14px;
    }
  }
  
`;
export const FooterRightCol = styled.div`
    text-align: right;
    cursor: pointer;
    p{
      font-size: 17px;
      transition:all .5s;
      
      &:hover{
        color:${({theme})=>theme.secondaryColor};
        transition:all .5s;

        svg{
          transform: scale(1.2);
          transition:all .5s;
        }
      }

      @media screen and ${device.laptop}{
          font-size: 14px;
      }
    }
    svg{
      color:${({theme})=>theme.secondaryColor};
      transition:all .5s;
    }

    @media screen and ${device.tablet}{
        text-align: center;
        margin-top: 20px;
    }
    
    
`;