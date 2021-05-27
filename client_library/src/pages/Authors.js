import React, {useContext} from 'react';
import {Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../index";

const Authors = () => {
    const {publication} = useContext(Context)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width: window.innerWidth - 100, backgroundColor:'#C06C84', color:'white'}} className="p-5">
                    <h2 className="align-self-center"> Авторы</h2>
                    <div>
                        {publication.authors.map(author =>
                            <Link  style={{ textDecoration: 'none' }}>
                                <div className="d-flex justify-content-between container mt-3" style={
                                    { backgroundColor:'#3366CC', color:"white"}
                                }>
                                    <p>{author.name}</p>
                                </div>
                            </Link>
                        )}
                    </div>

            </Card>
        </Container>
    );
};

export default Authors;