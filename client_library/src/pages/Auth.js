import React from 'react';
import {Container, Form, Card, Button} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === REGISTRATION_ROUTE
    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width: 600, backgroundColor:'#C06C84', color:'white'}} className="p-5">
                <h2 className="m-auto">{isLogin ?  "Регистрация": "Авторизация"}</h2>
                <Form className="d-flex flex-column">
                    {isLogin ? <Form.Control
                        className="mt-3"
                        placeholder="Введите ваше имя/псевдоним..."
                    />: <div></div> }
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Button
                        className="d-flex mt-3 justify-content-center"
                        variant={"dark"}
                        style={{backgroundColor:"#6C5B7B", textAlign:"center"}}
                    >
                        {isLogin ? "Зарегистрироваться": "Войти"}
                    </Button>
                    {isLogin ?
                        <div className="align-self-center">
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                        :
                        <div className="align-self-center">
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </div>
                    }
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;