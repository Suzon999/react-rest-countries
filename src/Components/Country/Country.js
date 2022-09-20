import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const { flags, name, population } = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name :{name.common} </h2>
            <p>Population :{population} </p>
            {/* <img src={props.flags} alt="" />
            <h2>Country Name :{props.name} </h2>
            <p>Population :{props.population} </p> */}
        </div>
    );
};

export default Country;