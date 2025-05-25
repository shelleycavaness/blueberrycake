import { device } from "../../../globalComponents/device";
import styled from "styled-components";

export const SkillsWrapper = styled.div`
    padding-bottom: 70px;

    @media screen and ${device.tablet}{
        padding-bottom: 50;
    }
`;
export const ProgressbarWrapper = styled.div`
    margin-top: -30px;
`;
export const ProgressCol = styled.div`
    margin:30px 20px;
`;