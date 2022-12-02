import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetails } from "../accions";
import { useEffect } from "react";
import logo2 from '../assets/images/dogRun.gif'
import style from './DetailCard.module.css'


export default function DetailCard(props){
    
    const dispatch = useDispatch()
   
    const myCharacter = useSelector((state=> state.detail))
    
    const {id}=useParams()

    useEffect(()=>{
        
      dispatch(getDetails(id))
      
    },[dispatch,id])

    
    

    return(
        <div className={style.card}>
            {myCharacter.name?
            
            <div className={style.primer}>
            <div className={style.circulo}></div>
                <h1> {myCharacter.name}</h1>
                <img className={style.image} src = {myCharacter.image} alt='image not found'/>
                <h3>Temperamentos: {myCharacter.temperaments? myCharacter.temperaments.map(el => el.name + ", ") : myCharacter.temperament}</h3>
                <h3> Altura: {myCharacter.height}</h3>
                <h3>Esperanza de vida: {myCharacter.life_span} </h3>
               
            <h3> 
            Peso kg: {myCharacter.weight} 
            </h3>
                
             
          
            
            <Link to='/home'>
                <button className={style.button}> Volver </button>
            </Link>
            </div> 
                :
                <div>
                <h2 id={style.cargando} > Cargando... </h2>
            <img id={style.img} src={logo2} alt='Cargando...'/>   
            </div>
                }
        </div>
    )
}