import React from 'react';
import './Person.css'

const person = ( props ) => {

    return (
        <div className = "Person">
            <p> I am { props.name }. I am { props.age } years old.</p>
            <p> { props.children }</p>
            <input type="text" onChange={ props.changed }/>
        </div>
    )
};

export default person ;
//When using class based components we will use this.props
//{props.children is use to read the values between the opening anfd closing tags <Person> in App.js}