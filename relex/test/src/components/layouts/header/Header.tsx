import React, {useEffect} from "react";
import {Button, HeaderFlex} from "./headerStyle";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectOrder, setIsAuth, setUserName} from "../../../store/slices/userSlice";
import {useNavigate} from "react-router";

export const Header = () => {
    const user = useAppSelector(selectOrder);
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch(setIsAuth(false))
        navigate("/")
    }
    return (
        <HeaderFlex $direction='column' $padding='0 20px' $align='flex-end'>
            {user.auth ? <Button onClick={handleLogout}> Выйти</Button> : 'Войти'}
        </HeaderFlex>
    )
}
