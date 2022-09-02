import React from 'react';
import { useState } from 'react';

import searchIcon from './images/icons8-search-50.png'


export default function SearchBar ({data}) {

    const [cauta, setCauta] = useState([]);
    
    const filtruCautare = (event) => {
        const cuvImput = event.target.value;
        const newFiltru = data.filter((x) => {
            let rez = x.toLowerCase().includes(cuvImput.toLowerCase());
            return rez;
        })
        // aici am vrut sa afisez un mesaj...daca nu gaseste nici o cautare
        // la mine daca nu mi gaseste nici o cautare imi afiseaza intreaga lista
        setCauta(newFiltru);
    }

    return (<main className="main">
                <label><input type="search" placeholder='Search here...' onChange={filtruCautare}/><img src={searchIcon} alt="..."/></label>
                {
                    (cauta.length !== 0) ? 
                        <div>{cauta.map((inreg, index) => {
                            return <p key={index} className="inreg">{inreg}</p>
                        })}</div>        :
                        <div>{data.map((inreg, index) => {
                            return <p key={index} className="inreg">{inreg}</p>
                        })}</div>
                }
            </main>)
}