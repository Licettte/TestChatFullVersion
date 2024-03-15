import styled from "styled-components";
import {FONT_MEDIUM_15} from "../../styles/fonts";
import {Link} from "react-router-dom";

export const Div = styled.div`
    display: flex;
    justify-content: center;  
    flex-direction: column;
    align-items: center;
    ${FONT_MEDIUM_15}
`;
export const Span= styled.span<{ $color: string }>`    
    color:${props => props.$color || 'brown'};
`;
export const AuthLink = styled(Link)`
    ${FONT_MEDIUM_15}
`;
