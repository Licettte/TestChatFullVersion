import styled from "styled-components";
import {FONT_REGULAR_20, FONT_SEMI_BOLD_20} from "../../../../styles/fonts";
import {BACKGROUND_COLOR, DARK_L_COLOR} from "../../../../styles/colors";

export const FormSend = styled.form`
    width: 100%;
    margin: auto;
    display: flex;
`;

export const InputMessage = styled.input`
    display: block;
    width: 100%;
    height: calc(4.25rem + 1px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;

    ${FONT_REGULAR_20};
    line-height: 2.5;
    color: ${BACKGROUND_COLOR};
    background-color: ${DARK_L_COLOR};
    background-clip: padding-box;
    border: 2px solid ${BACKGROUND_COLOR};
    border-radius: 1.25rem;
`;
export const Button = styled.button`
    ${FONT_SEMI_BOLD_20};
    width: 28%;
    border-radius: 13px;
    color: #444;
    background-color: #fff;
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
`;
