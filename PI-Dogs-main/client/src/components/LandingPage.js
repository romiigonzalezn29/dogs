import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'
export default function LandingPage(){
    return (
        <div className={style.contenedor}>
            <h1 className={style.title}> Buscador de perros </h1>
            <Link to='/home'>
                <button className={style.button}>
                    Ingresar
                </button>
            </Link>
        </div>
    )
}