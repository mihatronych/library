import React from 'react';
import {DropdownButton, Nav} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

const AdditionalMenu = () => {
    return (
        <Nav className="ml-auto" style={{color: 'white'}}>
            <DropdownButton title="Дополнительно" className="ml-2" variant={"outline-light"} style={{zIndex:100}}>
                <DropdownItem>
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