import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";

import {Context} from "../index";
import SortablePublications from "../components/SortablePublications";
import {observer} from "mobx-react-lite";
import {fetchAuthor, fetchPublication, fetchType} from "../http/library_api";
import {fetchMark} from "../http/mark_api";


const Publications = observer(() => {
    const {publication, mark, superFilter} = useContext(Context)
    useEffect(() => {
        fetchAuthor().then(data => publication.setAuthors(data)).then(data => mark.setAuthors(data))
        fetchPublication().then(data => publication.setPublications(data)).then(data => mark.setPublications(data))
        fetchMark().then(data => mark.setMarks(data))
        fetchType().then(data => publication.setTypes(data))
    }, [publication, mark])

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            {superFilter.filtered === undefined ?
            <SortablePublications publications={publication.publications} authors={publication.authors} types={publication.types} marks = {mark}/>
                : <SortablePublications publications={superFilter.filtered} authors={publication.authors} types={publication.types} marks = {mark}/>}
        </Container>
    );
});

export default Publications;