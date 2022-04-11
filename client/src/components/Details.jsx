import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCountriesDetail } from "../actions";
import './DetailsStyle.css'


export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const countryDetails = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getCountriesDetail(id))
    },
        [dispatch, id]
    )

    return (
        <div className="fondoDetail">
            {countryDetails ? (
                <div className="Cont-General">
                    <h1 className="Titulo-Detail">{countryDetails.name}</h1>
                    <img className="Imagen-Detail" src={countryDetails.flag} alt="" />
                    <h3 className="Continente-Detail">Continente: {countryDetails.region}</h3>
                    <h3 className="Code-Detail">Código: {countryDetails.ID}</h3>

                    <div className="Cont-Sub">

                        <h3 className="tituloElem">Población: {countryDetails.population}</h3>
                        <h3 className="tituloElem">Capital: {countryDetails.capital}</h3>
                        <h3 className="tituloElem">Subregión: {countryDetails.subregion}</h3>
                        <h3 className="tituloElem">Área: {countryDetails.area} m²</h3>
                        <h3 className="tituloElem">Actividades turísticas:</h3>
                        <div>

                            {/* {console.log(countryDetails.activities)} */}
                            {countryDetails.activities?.length > 0?

                                countryDetails.activities.map((e) => (<div className="activityCard">
                                    <h4>Actividad: {e.name}</h4>
                                    <h4>Dificultad: {e.difficulty}</h4>
                                    <h4>Duración: {e.duration} horas</h4>
                                    <h4>Temporada: {e.season}</h4>
                                </div>))
                                : <h4>No hay actividades</h4>
                            }
                        </div>

                    </div>
                    <Link to="/home">
                        <button className="botHome">Volver</button>
                    </Link>

                </div>
            ) : (console.log("Vacío"))}
        </div>
    )

}