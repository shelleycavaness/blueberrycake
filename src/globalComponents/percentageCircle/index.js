import React from "react";
import { PercentageWrapper } from './percentagecircle.style';

const PercentageSection = ({percentage,text,flag}) => {
    return (
        <PercentageWrapper>
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={flag?"circle circle-animation":"circle"}
                    stroke-dasharray={percentage + ",100"}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text className="percentage">{percentage} %</text>
            </svg>
            <h6>{text}</h6>
        </PercentageWrapper>
    )
}
export default PercentageSection;