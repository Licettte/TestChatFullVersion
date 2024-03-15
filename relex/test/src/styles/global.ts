
import  { createGlobalStyle } from 'styled-components';
import {
    FONT_BOLD_15,
    FONT_BOLD_25,
    FONT_BOLD_30,
    FONT_MEDIUM_15,
    FONT_REGULAR_20,
    FONT_SEMI_BOLD_13,
    FONT_SEMI_BOLD_20
} from "./fonts";
import {BACKGROUND_COLOR, DARK_L_COLOR, DARK_M_COLOR, PRIMARY_COLOR} from "./colors";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
        word-break: normal;
    }

    html {
        font-size: 10px;
    }

    body {
        margin: 0;
        max-width: 1110px;
        height: 100%;
        background-color:  rgba(234, 217, 210, 0.56);
        overflow-x: hidden;
        //overflow-y: hidden;
    }

    a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
        ${FONT_BOLD_15};
        padding: 0 15px 0 0;
    }

    p{
        ${FONT_MEDIUM_15}
    }
    ul {
        list-style: none;
        margin: 0;
        flex-wrap: wrap;

    }

    li {
        ${FONT_SEMI_BOLD_13};
        color: ${DARK_M_COLOR};
        padding: 0 0 14px 0;
    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;

        // &:hover {
        //     background-color: ${PRIMARY_COLOR};
        //     color: ${DARK_L_COLOR};
        // }
    }

    img {
        vertical-align: top;
    }

    h1 {
        ${FONT_BOLD_30};
        margin: 0;
    }

    h2 {
        ${FONT_BOLD_25};
        margin: 0;
        color: ${DARK_L_COLOR};
        text-align: center;
    }

    h3 {
            ${FONT_SEMI_BOLD_20};
            padding: 0 0 15px 0;
            color: ${DARK_L_COLOR};
    }

    h4 {
            ${FONT_MEDIUM_15};
            //padding: 0 0 0 34px;
    }

    h5 {
        ${FONT_MEDIUM_15};
        padding: 0 0 15px 0;
        text-align: center;
    }

    h6 {
        ${FONT_REGULAR_20};
        margin: 0;
        padding: 0;
    }
`;


