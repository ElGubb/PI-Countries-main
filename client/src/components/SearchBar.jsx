import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName } from '../actions';
import './SearchBarStyles.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!name) {
            return alert('Debe ingresar un nombre');
        }
        else {
            dispatch(getCountriesName(name));
            setName('');
            document.getElementById('search').value = '';
        }
    }

    return (
        <div className="searchBar">
            <input
            className="inputSearch"
            id='search'
             type="text"
             placeholder="Buscar país"
             onChange={(e) => handleInputChange(e)} 
             /> <br />
             <button className="botonSearch" type="submit" onClick={(e) => handleSubmit(e)}>
                 Buscar
             </button>
        </div>
    )
}