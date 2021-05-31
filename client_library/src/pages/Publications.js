import React, {useContext, useEffect} from 'react';
import {Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../index";
import Button from "@material-ui/core/Button";
import SortablePublications from "../components/SortablePublications";
import {observer} from "mobx-react-lite";
import {fetchAuthor, fetchPublication} from "../http/library_api";
import {fetchMark} from "../http/mark_api";


const Publications = observer(() => {
    const {publication, mark} = useContext(Context)

    useEffect(() => {
        fetchAuthor().then(data => publication.setAuthors(data)).then(data => mark.setAuthors(data))
        fetchPublication().then(data => publication.setPublications(data)).then(data => mark.setPublications(data))
        fetchMark().then(data => mark.setMarks(data))
    }, [publication, mark])

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <SortablePublications publications={publication.publications}/>
        </Container>
    );
});

export default Publications;