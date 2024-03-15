import React from "react";
import {SideBarContainer} from "./sideBarStyle";
import {ChatUser} from "../chatUser/chatUser";
import FilterUserName from "../filter/FilterUserName";

export const SideBar = ({messages, setFilterName}) => {
    return (
        <SideBarContainer>
            <ChatUser/>
            <FilterUserName messages={messages} setFilterName={setFilterName}/>
        </SideBarContainer>
    )
};
