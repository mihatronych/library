import React, {useContext} from 'react';
import {Card, Container} from "react-bootstrap";
import {Context} from "../index";
import {Link} from "react-router-dom";

const Main = () => {
    const {publication} = useContext(Context)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width: window.innerWidth - 100, backgroundColor:'#C06C84', color:'white'}} className="p-5">
                <h2 className="align-self-center"> Новейшие публикации</h2>
                <div >
                {publication.publications.map(publicat =>
                    <Link to={"/publication/:"+publicat.id} style={{ textDecoration: 'none' }}>
                        <div className="d-flex justify-content-between container mt-3" style={
                            { backgroundColor:'#3366CC', color:"white"}
                        }>
                            <p>{publicat.title}</p>
                            <p>Год издания: {new Date(publicat.date_publ).getFullYear()}</p>
                            <p>{publicat.pages} стр.</p>
                        </div>
                    </Link>
                    )}
                </div>
            </Card>
        </Container>
    );
};

export default Main;