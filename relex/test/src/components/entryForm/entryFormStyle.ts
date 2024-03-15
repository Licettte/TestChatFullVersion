import styled from "styled-components";
import {FlexStyle} from "../../styles/Flex";
import {dekstop} from "../../styles/variables";
import {BACKGROUND_COLOR, DARK_L_COLOR, LIGHT_COLOR} from "../../styles/colors";
import {FONT_MEDIUM_15, FONT_REGULAR_20, FONT_SEMI_BOLD_15, FONT_SEMI_BOLD_20} from "../../styles/fonts";


export const EntryFormContainer = styled(FlexStyle)`
    margin: auto;
    padding: 20px;
    max-width: ${dekstop};
`;

export const Input = styled.input`
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
    width: 100%;
    margin: 15px 0;
    border-radius: 13px;
    line-height: 55px;
    ${FONT_SEMI_BOLD_20};
    color: #444;
    background-color: #fff;
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
`;
export const Div = styled.div`
    margin: auto;
`;
export const Form = styled.form`
    width: 30%;
    margin: auto;
`;
export const Span = styled.span`
    color: brown;
    ${FONT_MEDIUM_15}
`;

