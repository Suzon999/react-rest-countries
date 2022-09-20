import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className='countries'>
            <h1>Visiting All Country In The World</h1>
            <h3>Total Countries :{countries.length} </h3>

            {
                countries.map(country => <Country
                    country={country}
                // name={country.name.common}
                // flags={country.flags.png}
                // population={country.population}

                ></Country>)
            }
        </div>
    );
};

export default Countries;