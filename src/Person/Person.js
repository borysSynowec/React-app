import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>im {props.name} and im {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>

    )
};

export default person;