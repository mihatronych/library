import React, {useContext} from 'react';
import {Card, Container, DropdownButton} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../index";
import Button from "@material-ui/core/Button";
import DropdownItem from "react-bootstrap/DropdownItem";
import ReactPaginate from 'react-paginate';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const SortablePublications = (props) => {
    //const {publication} = useContext(Context) // ЧЕ-ТО тут не то с этими пропсами!
    const { items, requestSort, sortConfig } = useSortableData(props.publications);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
            <Card style={{width: window.innerWidth - 100, backgroundColor:'#C06C84', color:'white'}} className="p-5">
                <h2 className="align-self-center"> Публикации</h2>
                <DropdownButton title="Сортировать" className="ml-2" variant={"outline-light"} style={{zIndex:100} }>
                    <DropdownItem onClick={() => requestSort('title')}
                                  className={getClassNamesFor('title')}>
                        По названию
                    </DropdownItem>
                    <DropdownItem onClick={() => requestSort('pages')}
                                  className={getClassNamesFor('pages')}>
                        По страницам
                    </DropdownItem>
                    <DropdownItem onClick={() => requestSort('date_publ')}
                                  className={getClassNamesFor('date_publ')}>
                        По дате издания
                    </DropdownItem>
                </DropdownButton>
                <div>
                    {items.map(item =>
                        <Link to={"/publication/:"+item.id} style={{ textDecoration: 'none' }}>
                            <div className="d-flex justify-content-between container mt-3" style={
                                { backgroundColor:'#3366CC', color:"white"}
                            }>
                                <p>Название: {item.title}</p>
                                <p>Год издания: {new Date(item.date_publ).getFullYear()}</p>
                                <p>{item.pages} стр.</p>
                            </div>
                        </Link>
                    )}
                </div>
            </Card>
    );
};

export default SortablePublications;