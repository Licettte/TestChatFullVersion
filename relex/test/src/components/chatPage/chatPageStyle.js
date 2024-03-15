import styled from "styled-components";
import {FlexStyle} from "../../styles/Flex";
import {tablet} from "../../styles/variables";
export const ChatFlex = styled(FlexStyle)`
    @media (max-width: ${tablet}) {
    
        max-width: 810px;
        margin: 10px;
        height: 100vh;
    }
    margin: auto;
    width: 70%;
    height: 100vh;
`;

export const Side = styled(FlexStyle)`
    margin: auto;
    width: 70%;
    height: 100vh;
`;
export const Main = styled.div`
    @media (max-width: ${tablet}) {
        max-width: 560px;;
        margin: 10px;
        height: 100vh;
    }

    flex: 4;
   
`;
