import styled from "styled-components";

export const PercentageWrapper = styled.div`
    width: 100%;
    justify-content: space-around ;

    .circular-chart {
        display: block;
        margin: 10px auto;
        max-width: 80%;
        max-height: 250px;
    }

    .circle-bg {
        fill: none;
        stroke: ${({theme})=>theme.cardBackgroundColor};
        stroke-width: 3.8;
    }

    .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
        stroke: ${({theme})=>theme.secondaryColor};
    }
    .circle.circle-animation{
        animation: progress 2s ease-out forwards;
    }
    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }
    .percentage{
        font-size: 7.5px;
        transform: translate(33%,55%);
        font-family: 'Outfit',sans-serif;
        font-weight: 700;
        fill:${({theme})=>theme.textColor};
    }

    h6{
        text-align: center;
        text-transform: uppercase;
        margin-top: 30px;
    }

`;