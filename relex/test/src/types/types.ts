import {ReactNode} from "react";

export type EntryFormType = {
    title: string,
    handleClick: (name: string, email: string, password: string) => void;
}

export type Children = {
    children: ReactNode
}

export type FlexType = {
    $direction?: string,
    $align?: string,
    $justify?: string,
    $margin?: string
    $padding?: string
}

export type FlexChildren = {
    children: ReactNode,
    $direction?: string,
    $align?: string,
    $justify?: string,
    $margin?: string
    $padding?: string
}

export type  User = {
    auth?: boolean;
    name?: string,
    email: string,
    password: string,
    id?: any
};

export type Messages = {
    id: string,
    text: string,
    name: string,
    datetime: string
};

export type UserState = {
    name: string,
    email: string
    password: string,
    status: 'idle' | 'loading' | 'finished' | 'error';
    auth: boolean,
    token: [];
    users: [];
    message:string
}

export type MessageState = {
    id: string,
    text: string,
    message: string,
    messages:[],
    name: string,
    datetime: string
    status: 'idle' | 'loading' | 'finished' | 'error';
}
