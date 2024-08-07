import { Fragment, useState } from "react";

interface Props {
    cities: string[];
    title: string;
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