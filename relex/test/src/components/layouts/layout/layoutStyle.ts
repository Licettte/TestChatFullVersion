import styled from "styled-components";

import {DARK_L_COLOR} from "../../../styles/colors";

import {FlexStyle} from "../../../styles/Flex";

export const Top = styled.header`
    width: 100vw;
    background: ${DARK_L_COLOR};
    height:10vh;
`;
export const Content = styled.div`
    width: 100vw;
    margin: 40px 0 0 0;
    flex: 1 1 auto;
`;

export const Bottom = styled.footer`
    width: 100vw;
    min-height: 50px;      
`;

export const Container = styled(FlexStyle)`
    width: 100vh;
`;

