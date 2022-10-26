import React from "react";
import style from './Card.module.css'
export default function Card({image, name, temperament, life_span, height, weight}){

    return(
        <div className={style.up} >
           <div >
            <div className={style.circulo}></div>
            <h3>{name}</h3>
            <img className={style.img} src={image} alt='img not found' />
            </div>
            <div >
            <h4>{temperament}</h4> 
            <p> {life_span} <br/>
            {height} <br/>
            {weight} <br/>
            </p>
            </div>

        </div>
    )
}