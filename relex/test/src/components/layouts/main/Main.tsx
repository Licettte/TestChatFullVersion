import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {MainFlex} from "./mainStyle";
import {useAppSelector} from "../../../store/hooks";
import {selectOrder} from "../../../store/slices/userSlice";

export const Main = () => {
    const navigate = useNavigate();
    const user = useAppSelector(selectOrder);
    useEffect(() => {
        return user.auth ?
            navigate("/profile")
            : navigate("/register")
    }, [user.auth]);

    return (
        <MainFlex>
        </MainFlex>)
};
