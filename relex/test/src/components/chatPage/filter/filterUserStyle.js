import styled from "styled-components";
import {FONT_BOLD_15, FONT_MEDIUM_15} from "../../../styles/fonts";

export const FormRadioBtn = styled.div`
    display: inline-block;
    margin-right: 10px;
`;

export const Label = styled.label`
    background: #dbd5e4;
    display: inline-block;
    cursor: pointer;
    padding: 0px 15px;  
    border: 1px solid #999;
    border-radius: 6px;
    user-select: none;
    line-height: 20px;
    text-align: center;
    width: 130px;
    margin: 8px;
    ${FONT_MEDIUM_15}
    &:hover {
        background: rgba(153, 241, 213, 0.66);
    }
`;
export const InputRadio= styled.input`
    display: none;
`;


