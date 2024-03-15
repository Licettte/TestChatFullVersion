import React, {useCallback, useEffect} from "react";
import {EntryForm} from "../entryForm/EntryForm";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {registration} from "../../store/service/registration";
import {useNavigate} from "react-router";
import {selectOrder} from "../../store/slices/userSlice";
import {AuthLink, Div, Span} from "./authStyle";
import {BRIGHT_PRIMARY_COLOR} from "../../styles/colors";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(selectOrder);

    const handleRegister = useCallback((email: string, password: string, name: string,) => {
        dispatch(registration({email: email, password: password, name: name,}));
    }, [dispatch]);

    return (
        <>
            <h2>Регистрация</h2>
            <EntryForm title="Зарегистрироваться" handleClick={handleRegister}/>

            <Div>
                <Span $color={BRIGHT_PRIMARY_COLOR}>{user.message}</Span>
                уже есть аккаунт?
                <AuthLink to='/login'>Войти</AuthLink>
            </Div>
        </>)
};
