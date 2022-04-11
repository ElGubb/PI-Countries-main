import React from "react";
import { Link } from "react-router-dom";
import './LandingPageStyles.css';

export default function LandingPage() {
    return (
        <div className="landing">
            <h1 className="title">Bienvenid@ a mi proyecto de países</h1>
            <Link to='/home'>
                <button className="button">Ingresar</button>
            </Link>
        </div>
    )
}