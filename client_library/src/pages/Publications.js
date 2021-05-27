import React, {useContext} from 'react';
import {Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../index";
import Button from "@material-ui/core/Button";

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

const Publications = (props) => {
    //const {publication} = useContext(Context) // ЧЕ-ТО тут не то с этими пропсами!
    const { items, requestSort, sortConfig } = useSortableData(props.publications);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width: window.innerWidth - 100, backgroundColor:'#C06C84', color:'white'}} className="p-5">
                <h2 className="align-self-center"> Публикации</h2>
                <Button
                    type="button"
                    onClick={() => requestSort('title')}
                    className={getClassNamesFor('title')}
                >
                    Название
                </Button>
                <div>
                    {items.map(item =>
                        <Link to={"/publication/:"+item.id} style={{ textDecoration: 'none' }}>
                            <div className="d-flex justify-content-between container mt-3" style={
                                { backgroundColor:'#3366CC', color:"white"}
                            }>
                                <p>{item.title}</p>
                                <p>Год издания: {new Date(item.date_publ).getFullYear()}</p>
                                <p>{item.pages} стр.</p>
                            </div>
                        </Link>
                    )}
                </div>
            </Card>
        </Container>
    );
};

export default Publications;