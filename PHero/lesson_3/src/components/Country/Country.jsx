import React, { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags, population, cca3} = country;

    const[visited, setVisited] = useState(false);

    const handleVidited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={visited? 'visited' : 'country'}>
            <h4 style={{color: visited ?'red' : ''}}>Name : {name.common}</h4>
            <img src={flags.png} className='image' alt="" />
            <p>Population : {population}</p>
            <p><small>Code : {cca3}</small></p>

            {visited ? 'i have visited ' : 'go to visit ' }
            <button onClick={handleVidited}>{visited ? 'visited' : 'going'}</button>

        </div>
    );
};

export default Country;