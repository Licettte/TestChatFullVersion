import React from "react";
import {Outlet} from "react-router-dom";
import {Bottom, Container, Content, Top} from "./layoutStyle";
import {Header} from "../header/Header";

export const Layout = () => {
    return (
        <Container $direction='column'>
            <Top>
                <Header/>
            </Top>

            <Content>
                <Outlet/>
            </Content>

            {/*<Bottom>*/}
            {/*    <Footer/>*/}
            {/*</Bottom>*/}
        </Container>
    )
}
