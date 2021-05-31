import React, {useContext, useEffect} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import {Link} from "react-router-dom";
import {fetchAuthor, fetchPublication, fetchType} from "../http/library_api";
import {observer} from "mobx-react-lite";
import {fetchMark} from "../http/mark_api";

const Main = observer(() => {
    const {publication, mark} = useContext(Context)
    /// ОЦЕНКУ ДОДЕЛАТЬ ТАМ ДОЛЖНА БЫТЬ СРЕДНЯЯ, А НЕ ПЕРВАЯ
    useEffect(() => {
        fetchAuthor().then(data => publication.setAuthors(data)).then(data => mark.setAuthors(data))
        fetchPublication().then(data => publication.setPublications(data)).then(data => mark.setPublications(data))
        fetchMark().then(data => mark.setMarks(data))
    }, [publication, mark])

    const meanMark = (publicationId) =>{
        let count = 0
        let sum = 0
        mark.marks.map(items => {
            if (items.publicationId === parseInt(publicationId))
            {
                count += 1
                sum += parseInt(items.rate)
            }
        })
        if (count === 0){
            count = 1
        }
        return <div>рейтинг: {sum/(count * 10)}</div>
    }

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
                            <Row>
                                {publication.types.map(items => {
                                if (items.id === parseInt(publicat.typeId))
                                    return <p className="m-auto ml-1">{items.name} </p>
                            })
                            }
                                <Col className="m-auto"> <b> {publicat.title}</b>
                                {publication.authors.map(items => {
                                    if (items.id === parseInt(publicat.authorId))
                                        return <i className="m-auto"> - {items.name}</i>
                                })
                                }
                                </Col>
                            </Row>
                            <Row>
                                <Col className="m-auto">Дата издания: {publicat.date_publ.slice(0, 10)} </Col>
                                <Col className="m-auto" >{publicat.pages} стр.</Col>
                                <Col className="m-auto">{meanMark(publicat.id)}</Col>
                            </Row>
                        </div>
                    </Link>
                    )}
                </div>
            </Card>
        </Container>
    );
});

export default Main;