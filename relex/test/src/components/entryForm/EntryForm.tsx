import React, {memo, useCallback, useState} from "react";
import {EntryFormType} from "../../types/types";
import {Link, useLocation} from "react-router-dom";
import {Button, Div, EntryFormContainer, Form, Input, Span} from "./entryFormStyle";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectOrder, setUserEmail, setUserName, setUserPassword,} from "../../store/slices/userSlice";
import {useForm} from "react-hook-form";

export const EntryForm = memo(({title, handleClick}: EntryFormType) => {

    const path = useLocation();
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectOrder);

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur"
    })

    const onChangeUserName = useCallback((name: any) => {
        dispatch(setUserName(name))
    }, [dispatch])

    const onChangeUserEmail = useCallback((email: string) => {
        dispatch(setUserEmail(email))
    }, [dispatch])

    const onChangeUserPassword = useCallback((password: string) => {
        dispatch(setUserPassword(password))
    }, [dispatch])

    const onSubmit = () => {
        handleClick(user.email, user.password, user.name)
    }

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    return (
        <EntryFormContainer $direction='column' $padding='0 20px'>

            <Form onSubmit={handleSubmit(onSubmit)}>
                {path.pathname === '/register' ?
                 <>  <Input
                        {...register('name', {
                            required: "поле обязательно к заполнению",
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            }
                        })}

                        type="text" value={user.name}
                        onChange={(e) => onChangeUserName(e.target.value)}
                        placeholder='name'/>
                    <Span> {errors?.name && <>{errors?.name?.message || "Error"}</>}</Span>
                 </>
                    :
                    null}


                <Input
                    {...register('email', {
                        required: "поле обязательно к заполнению",
                        pattern: {
                            value: regexEmail,
                            message: "невалидный email адресс"
                        }
                    })}

                    type="text" value={user.email} onChange={(e) => onChangeUserEmail(e.target.value)}
                    placeholder='email'/>
                <Span> {errors?.email && <>{errors?.email?.message || "Error"}</>}</Span>

                <Input     {...register('password', {
                    required: "поле обязательно к заполнению",
                    minLength: {
                        value: 3,
                        message: "Минимум 3 символа"
                    }
                })}
                           type="password" value={user.password}
                           onChange={(e) => onChangeUserPassword(e.target.value)}
                           placeholder='password'/>

                <Span>  {errors?.password && <>{errors?.password?.message || "Error"}</>}</Span>
                <Button type="submit">{title}</Button>

            </Form>

        </EntryFormContainer>)
})
