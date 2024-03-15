import styled from "styled-components";
import {FONT_MEDIUM_15} from "../../../styles/fonts";
import {FlexStyle} from "../../../styles/Flex";

export const Div= styled(FlexStyle)`
    margin: 5px;
     display: flex;    
    ${FONT_MEDIUM_15}
`;
export const Img= styled.img`
    border-radius: 50%;
    overflow: hidden; 
    width: 80%;
    height: 60%;
`;
