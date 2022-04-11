import React from "react";
import './Paginado.css'

export default function Paginado({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav className='nav'>
            <ul className="ul">
                {pageNumbers && 
                pageNumbers.map(number => (
                    <li className="paginado" key={number}>
                    <button className="buttonPag" onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}