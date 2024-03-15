import React from 'react';
import {GlobalStyle} from "./styles/global";
import {Route, Routes} from "react-router";
import {Layout} from "./components/layouts/layout/Layout";
import {SignIn} from "./components/auth/SignIn";
import {SignUp} from "./components/auth/SignUp";
import {Main} from "./components/layouts/main/Main";
import {ChatPage} from "./components/chatPage/ChatPage";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="profile" element={<ChatPage />}/>
                    <Route path="register" element={<SignUp/>}/>
                    <Route path="login" element={<SignIn/>}/>
                    <Route path='*' element="Error"/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
