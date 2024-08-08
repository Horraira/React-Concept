import { Fragment, useState } from "react";
import styled from "styled-components";
import "./ListGroup.css";

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li <ListItemProps>`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
    }
    background: ${(props) => props.active ? "#f9f9f9" : "white"};
`;

// interface is used to define the type of props that the component will receive from the parent component
// props is used to pass data from parent to child component

interface Props {
    cities: string[];
    title?: string;
    onSelectItem: (city: string) => void;
}

function ListGroup(props: Props) {

    let [selectedCity, setSelectedCity] = useState(-1);

    return (
        <Fragment>
            <h1>List</h1>
            {props.cities.length === 0 && <p>No cities</p>}
            <List>
                {props.cities.map((city, index) => (
                    <ListItem key={index}
                        active={selectedCity === index}
                        onClick={() => {
                            setSelectedCity(index);
                            props.onSelectItem(city);
                        }}>{city}</ListItem>
                ))}
            </List>
        </Fragment>
    )
}

export default ListGroup;