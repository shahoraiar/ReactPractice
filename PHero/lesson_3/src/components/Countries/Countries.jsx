import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const[Countries, setCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountry(data))
    }, [])

    return (
        <div>
            <h3>Countries : {Countries.length}</h3>
            <div className="grid-container">
                {
                    Countries.map(country=>
                        <Country key={country.cca3} country={country}></Country>
                    )
                }
            </div>
            
        </div>
    );
};

export default Countries;