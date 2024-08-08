import { Fragment, useState } from "react";
import styled from "styled-components";
import "./ListGroup.css";

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
            <ul className="list-group">
                {props.cities.map((city, index) => (
                    <li key={index}
                        onClick={() => {
                            setSelectedCity(index);
                            props.onSelectItem(city);
                        }}
                        className={selectedCity === index ? "list-group-item active" : "list-group-item"}>{city}</li>
                ))}
            </ul>
        </Fragment>
    )
}

export default ListGroup;