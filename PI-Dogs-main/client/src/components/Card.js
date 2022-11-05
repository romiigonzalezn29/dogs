import React from "react";
import style from './Card.module.css'
export default function Card({image, name, temperament}){

    return(
        <div className={style.up} >
           <div >
            <div className={style.circulo}></div>
            <h3 className={style.nombre}> {name}</h3>
            <img className={style.img} src={image} alt='img not found' />
            </div>
            <div >
            <h4>Temperamentos: {temperament}</h4> 
            
            </div>

        </div>
    )
}