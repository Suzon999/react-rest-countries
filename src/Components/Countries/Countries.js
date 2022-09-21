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
        <div >
            <h1>Visiting All Country In The World</h1>
            <h3>Total Countries :{countries.length} </h3>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        country={country}
                        kye={country.ccn3}

                    // name={country.name.common}
                    // flags={country.flags.png}
                    // population={country.population}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;