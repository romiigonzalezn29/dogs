import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetails } from "../accions";
import { useEffect } from "react";
import style from './DetailCard.module.css'


export default function DetailCard(props){
    console.log(props, 'detail.props')
    const dispatch = useDispatch()
   
    const myCharacter = useSelector((state=> state.detail))
    
    const {id}=useParams()

    useEffect(()=>{
        console.log('effect')
      dispatch(getDetails(id))
      
    },[dispatch,id])

    console.log('myCharacter',myCharacter)
    

    return(
        <div className={style.card}>
            
            <div className={style.primer}>
            <div className={style.circulo}></div>
                <h1> {myCharacter.name}</h1>
                <img className={style.image} src = {myCharacter.image}/>
                <h3>Temperamentos: {myCharacter.temperament}</h3>
                <h3> Altura: {myCharacter.height}</h3>
                <h3>Esperanza de vida: {myCharacter.life_span} </h3>
               
            <h3> 
            Peso kg: {myCharacter.weight} 
            </h3>
                
             
        
            
            <Link to='/home'>
                <button> Volver </button>
            </Link>
            </div> 
        </div>
    )
}