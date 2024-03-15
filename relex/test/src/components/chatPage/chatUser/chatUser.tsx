import {useAppSelector} from "../../../store/hooks";
import {selectToken} from "../../../store/slices/userSlice";
import avatar from "../../../img/avatar.png"
import {Div, Img} from "./chatUserStyle";
import {Flex} from "../../../styles/Flex";
import React from "react";
import coockie from "../../../img/coockie.png";
import {ImgCookie} from "../sideBar/sideBarStyle";

export const ChatUser = () => {
    const token = useAppSelector(selectToken);
    // @ts-ignore
    const currentUserName = token[2];

    return (
        <Div $direction='column' $align="center">
            <h4>{currentUserName}</h4>
            <Img src={avatar} alt=""/>
            <Flex $margin="15px 0">
                <ImgCookie src={coockie} alt="coockie"/>
                время кушать печеньки
            </Flex>
        </Div>
    )
};
