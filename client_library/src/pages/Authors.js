import React, {useContext, useEffect} from 'react';
import {Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../index";
import {fetchAuthor, fetchPublication} from "../http/library_api";
import {observer} from "mobx-react-lite";

const Authors = observer(() => {
    const {publication} = useContext(Context)

    useEffect(() => {
        fetchAuthor().then(data => publication.setAuthors(data))
        fetchPublication().then(data => publication.setPublications(data))
    }, [])

    const countBooksOfAuthor = (authorId) => {
        return publication.publications.filter((data) => {if (data.authorId === parseInt(authorId)) return data}).length
    }

    const getFilteredBooks= (authorId) => {
        return console.log(publication.publications.filter((data) => {if (data.authorId === parseInt(authorId)) return data}))
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width: window.innerWidth - window.innerWidth*0.2, backgroundColor:'#C06C84', color:'white'}} className="p-5">
                    <h2 className="align-self-center"> Авторы</h2>
                    <div>
                        {publication.authors.map(author => {
                            return <div>
                                <Link style={{textDecoration: 'none'}} to="">
                                    <div className="d-flex justify-content-between container mt-3" style={
                                        {backgroundColor: '#3366CC', color: "white"}
                                    }>
                                        <p>{author.name} </p>
                                        <p>{author.email} </p>
                                        <p>Публикаций: {countBooksOfAuthor(author.id)}</p>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>

            </Card>
        </Container>
    );
});

export default Authors;