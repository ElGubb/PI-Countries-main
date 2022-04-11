import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation, filterActivities } from "../actions/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './Home.css';

export default function Home () {

const dispatch = useDispatch();
const allCountries = useSelector((state) => state.countries); //Me traigo todos los países del state a allCountries
const [ /*orden*/, setOrden ] = useState("");
const [currentPage, setCurrentPage] = useState(1); //creo un estado para cuántas páginas quiero, la seteo en 1 página
const [countriesPerPage, /*setCountriesPerPage*/] = useState(10); //creo un estado para cuántos países quiero por página, según el readme
const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(() => {
    dispatch(getCountries());
}, [dispatch]) //en el array yo le paso lo que necesito para ejecutar el dispatch, si no está listo lo que le especifico, no se ejecuta

function handleClick(event){
    event.preventDefault();
    dispatch(getCountries());
    setCurrentPage(1)
}

function handleFilterContinent(e){
dispatch(filterCountriesByContinent(e.target.value))
setCurrentPage(1)
}

function handleSort(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
}

function handleSortPop(e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
}

function handleActivitiesSort(e){
    e.preventDefault();
    dispatch(filterActivities(e.target.value));
    setCurrentPage(1);
}
    
return (
    <div className="divMain">
        <div className="divTop">
        <Link to='/'>
                <h1 className="title">COUNTRIES APP</h1>
        </Link>
            
        <Link to='/activities'>
            <button className="buttonAct">Crear Actividad Turística</button>
        </Link> <br />
        <button className='button' onClick={event => {handleClick(event)}}>
            Volver a cargar los países
        </button>
        </div>
            <div className="div">
                <select 
                className="select"
                defaultValue='Continente'
                onChange={(e) => handleFilterContinent(e)}
                > 
                    <option disabled>Continente</option>
                    <option value='All'>Todos</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europa</option>
                    <option value='Oceania'>Oceanía</option>
                    <option value='Africa'>África</option>
                    <option value='Antarctic'>Antártica</option>
                </select>
                <select 
                className="select"
                defaultValue='Actividad Turística'
                onChange={(e) => handleActivitiesSort(e)}
                >
                    <option disabled>Actividad Turística</option>
                    <option value="All">Todos los países</option>
                    <option value="Without">Sin actividades</option>
                    <option value="Created">Con actividades</option>
                </select>
                <select 
                className="select"
                defaultValue='Orden'
                onChange={(e) => handleSort(e)}                
                >
                    <option disabled>Orden</option>
                    <option value= 'asc'>A-Z</option>
                    <option value= 'desc'>Z-A</option> 
                </select>
                <select 
                className="select"
                defaultValue='Población'
                onChange={(e) => handleSortPop(e)}
                >
                    <option disabled>Población</option>
                    <option value= 'high'>Mayor</option> 
                    <option value= 'low'>Menor</option>
                </select>
                
                <SearchBar/>

                <div className="cardContainer">
                    {currentCountries.length > 0 ?
                    (currentCountries.map((el) => {
                        return (
                            <div className="countryCard" key={el.ID}>
                                <Link to={"/countries/" + el.ID} >
                                <Card name={el.name} flag={el.flag} continent={el.region}></Card>
                                </Link>
                            </div>
                        );
                        })
                        ) : (
                        <div className="countryCard">
                            <h1 className="error">No hay países</h1>
                        </div>
                    )}

                </div>

                <Paginado 
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginado = {paginado}/>
            </div>
            
    </div>
)
}