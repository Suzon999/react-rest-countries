import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.flags} alt="" />
            <h2>Country Name :{props.name} </h2>
            <p>Population :{props.population} </p>
        </div>
    );
};

export default Country;