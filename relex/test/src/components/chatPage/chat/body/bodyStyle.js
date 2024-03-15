import styled from "styled-components";
import {FlexStyle} from "../../../../styles/Flex";
import {LIGHT_PRIMARY_COLOR, PRIMARY_COLOR} from "../../../../styles/colors";
import {FONT_REGULAR_20} from "../../../../styles/fonts";

export const Container = styled.div`
    margin: auto;
    position: sticky;
    height: 70vh;
    padding: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 18px;
    }

    &::-webkit-scrollbar-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border: 1px solid ${PRIMARY_COLOR};
        border-radius: 20px;
        background-color: #f8e9e9;
    }

    &::-webkit-scrollbar-track {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border: 1px solid ${PRIMARY_COLOR};;
        border-radius: 20px;
        background-color: rgba(206, 200, 226, 0.6);
    }
`;

export const ChatBody = styled(FlexStyle)`
`;

export const NameSender = styled.span`
    text-align: right;
    color: #5c585f;
    font-size: 13px;
`;

export const NameRecipient = styled.span`
    text-align: left;
    color: #5c585f;
    font-size: 13px;
`;

export const MessageRecipient = styled(FlexStyle)`
    background-color: ${LIGHT_PRIMARY_COLOR};
    width: 300px;
    padding: 10px;
    border-radius: 10px;
`;

export const MessageSender = styled(FlexStyle)`
    background-color: #cbc8e299;
    width: 300px;
    padding: 10px;
    margin-left: auto;
    border-radius: 10px;
`;

export const MessageContent = styled(FlexStyle)`
    width: 100%;
`;

export const ChatDate = styled(FlexStyle)`
    display: flex;
    padding: 0 8px;
    color: rebeccapurple;
`;
export const ChatStatus = styled(FlexStyle)`
    position: fixed;
    ${FONT_REGULAR_20};
    bottom: 110px;
`;

export const NameKira = styled(FlexStyle)`
    background-color: rgb(30 249 173 / 24%);;
    width: 300px;
    padding: 10px;
    margin-left: auto;
    border-radius: 10px;
`;

export const HeaderBody = styled.div`
`;

