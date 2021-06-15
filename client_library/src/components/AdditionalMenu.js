import React, {useEffect} from 'react';
import {DropdownButton, Nav} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {GRAPHS_ROUTE} from "../utils/consts";

const AdditionalMenu = () => {
    const history = useHistory()
    const toGraphs = async() => {
        return history.push(GRAPHS_ROUTE)
    }
    return (
        <Nav className="ml-auto" style={{color: 'white'}}>
            <DropdownButton title="Дополнительно" className="ml-2" variant={"outline-light"} style={{zIndex:100}}>
                <DropdownItem onClick={() => toGraphs()}>
                    Региональная статистика
                </DropdownItem>
                <DropdownItem>
                    Экспорт таблицы в Excel
                </DropdownItem >
            </DropdownButton>
        </Nav>
    );
};

export default AdditionalMenu;