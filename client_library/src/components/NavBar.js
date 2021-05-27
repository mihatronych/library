import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Navbar, Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import ArchiveMenu from "./ArchiveMenu";
import LanguageMenu from "./LanguageMenu";
import AdditionalMenu from "./AdditionalMenu";

const phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <div>
        <Navbar variant="dark" className="mb-3" style={{backgroundColor:'#C06C84', position:'fixed', zIndex:'3', height: "60px", width: "100%",}}>
            <Container>
            <NavLink style={{color:'white'}} to={MAIN_ROUTE}>Главная</NavLink>
                <ArchiveMenu />
                <LanguageMenu/>
                <AdditionalMenu/>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(false)}>Выйти</Button>
                </Nav> :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
            </Container>
        </Navbar>
            <div style={phantom} />
        </div>
    );
});

export default NavBar;