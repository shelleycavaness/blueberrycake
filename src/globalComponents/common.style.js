import styled from 'styled-components';

export const Commonbtn = styled.a`
    border:2px solid ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.textColor};
    text-transform: uppercase;
    font-family: 'Outfit', sans-serif;
    font-weight:600;
    padding: 15px 25px;
    text-decoration: none;
    font-size:16px;
    display:inline-block;
    transition: all .5s;
    
    text-align: center;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    position: relative;
    /* box-shadow: 0 5px 15px rgba(0,0,0,0.20); */

    span {
        position: relative; 
        z-index: 1;
        transition: all .5s;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
        width: 140%;
        background: ${({ theme }) => theme.secondaryColor};
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    &:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
`;