import React from 'react';
import { useState } from 'react';

import searchIcon from './images/icons8-search-50.png'


export default function SearchBar ({data, key}) {

    const [cauta, setCauta] = useState([]);

    const filtruCautare = (event) => {
        const cuvImput = event.target.value;
        const newFiltru = data.filter((x) => {
            return x.toLowerCase().includes(cuvImput.toLowerCase());
        })
        setCauta(newFiltru);
    }

    return (<main className="main">
                <label><input type="search" placeholder='Search here...' onChange={filtruCautare}/><img src={searchIcon} alt="..."/></label>
                {
                    (cauta.length === 0) ? 
                        <div>{data.map((inreg, index) => {
                            return <p key={index}>{inreg}</p>
                        })}</div>         :
                        <div>{cauta.map((inreg, index) => {
                            return <p key={index}>{inreg}</p>
                        })}</div>           
                }
            </main>)
}