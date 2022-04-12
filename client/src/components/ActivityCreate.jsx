import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getCountries } from "../actions";
import { Link } from "react-router-dom";
import './ActivityCreateStyles.css'

export default function ActivityCreate () {
    const dispatch = useDispatch();
    const {countries2} = useSelector((state) => {return state})
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:[]
    })
    

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    function handleChange(e) {
        e.preventDefault();
        setInput({
           ...input,
            [e.target.name]:e.target.value
        })
        setError(
            validate({
                ...input,
            [e.target.name]:e.target.value})
        );
    }

    function handleCountry(e) {
        e.preventDefault();
        setInput({
            ...input,
            countries: input.countries.includes(e.target.value) 
            ? input.countries
            : [...input.countries, e.target.value]
        })
        setError(
            validate({
                ...input,
            countries: input.countries.includes(e.target.value) 
            ? input.countries
            : [...input.countries, e.target.value]
            })
        )
    }

    function handleDeleteCountry(c) {
        setInput({
            ...input,
            countries: input.countries.filter((country) => country !== c)})
        setError(
            validate({
                ...input,
                countries: input.countries.filter((country) => country !== c)
            })
        )
    }

    function handleSubmit(e) {
         e.preventDefault();
        //    if(input.name.trim() === ""){
        //        return alert('Debe ingresarse un nombre')
        //    } else if (input.difficulty < 1 || input.difficulty > 5) {
        //        return alert('Debe seleccionar una dificultad del 1 al 5')
        //    } else if (input.duration.trim() === "" || input.duration < 1) {
        //        return alert('Debe seleccionar una duración')
        //    } else if (input.season.length === 0) {
        //        return alert('Debe seleccionar una temporada')
        //    } else if (input.countries.length === 0) {
        //        return alert('Debe elegir al menos 1 país')
        //    } else {
         dispatch(postActivity(input))
         alert('Actividad creada')
         setInput({
             name:'',
         difficulty:'',
         duration:'',
         season:'',
         countries:[]
         })
     
    }

    let validate = (input) => {
        let error = {};
        if (!input.name || input.name.length > 40) {
          error.name = "Debe ingresarse un nombre (máx 40 caracteres)";
        } else if (!input.difficulty) {
          error.difficulty = "Debe seleccionar una dificultad del 1 al 5";
            } else if (!input.duration) {
          error.duration = "Debe seleccionar una duración de 1 a 6 horas";
        } else if (!input.season) {
          error.season = "Debe seleccionar una temporada";
        } else if (!input.countries.length > 0) {
            error.countries = "Debe elegir al menos 1 país";
        }
        else { error.submit = "Actividad creada";}
        return error;
    }
    

    return (
        
        <form className='formulario' onSubmit={(e) => handleSubmit(e)}>
            <div className="actText">Crear actividad</div>
        <div className="actContainer">
            <div>
                <label className="label">Nombre: </label>
                <input className="select" type="text" name="name" onChange={(e) => handleChange(e)} value={input.name}/>
            </div>
            {error.name && <p className="validateForm">{error.name}</p>}
            <div>
                <label className="label">Dificultad: </label>
                <select 
                name="difficulty"
                className="select"
                defaultValue='Dificultad'
                 onChange={(e) => handleChange(e)}>
                    <option disabled>Dificultad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            {error.difficulty && <p className="validateForm">{error.difficulty}</p>}
            <div>
                <label className="label">Duración: </label>
                <select 
                name="duration"
                className="select"
                defaultValue='Duración'
                 onChange={(e) => handleChange(e)}>
                    <option disabled>Duración</option>
                    <option value="1">1 hora</option>
                    <option value="2">2 horas</option>
                    <option value="3">3 horas</option>
                    <option value="4">4 horas</option>
                    <option value="5">5 horas</option>
                    <option value="6">6 horas</option>
                </select>
            </div>
            {error.duration && <p className="validateForm">{error.duration}</p>}
            <div>
                <label className="label">Temporada: </label>
                <select
                name="season"
                className="select"
                defaultValue='Temporada'
                onChange={(e) => handleChange(e)}>
                    <option disabled>Temporada</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
            </div>
            {error.season && <p className="validateForm">{error.season}</p>}
            <div>
                <label className="label">Países</label> <br />
                <select
                className="select"
                defaultValue='Seleccionar'
                onChange={(e) => handleCountry(e)}>
                    <option disabled>Seleccionar</option>
                    {countries2.sort((a, b) => a.name.localeCompare(b.name)).map((el) => ( <option value={el.name} key={el.id}>
                        {el.name}
                    </option>))
                    }
                </select>
                {error.countries && <p className="validateForm">{error.countries}</p>}
                <div>
                     {input.countries.map((c) => (<div key={c}>
                        <p>{c}</p>
                        <button onClick={() => handleDeleteCountry(c)}>x</button>
                    </div>))}
                </div>
            </div>
            
            <div>
                <button className="button" type="submit">Crear actividad</button>
            </div>
            
            <Link to="/home">
                        <button className="botHome">Volver</button>
                    </Link>
        </div>
        </form>
        
    )
}
