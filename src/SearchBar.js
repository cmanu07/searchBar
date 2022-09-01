import React from 'react';
import { useState } from 'react';

import searchIcon from './images/icons8-search-50.png'


export default function SearchBar ({data}) {

    const [cauta, setCauta] = useState([]);

    const filtruCautare = (event) => {
        const cuvImput = event.target.value;
        const newFiltru = data.filter((x) => {
            return x.includes(cuvImput);
        })
        setCauta(newFiltru);
    }

    return (<main className="main">
                <label><input type="search" placeholder='Search here...' onChange={filtruCautare}/><img src={searchIcon} alt="..."/></label>
                <div>{cauta.map((inreg) => {
                    return <p>{inreg}</p>
                })}</div>
            </main>)
}