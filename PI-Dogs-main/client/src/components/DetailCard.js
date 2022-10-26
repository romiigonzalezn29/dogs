import React from "react";
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getDetails } from "../accions";
import { useEffect } from "react";

export default function DetailCard(props){
    console.log(props, 'detail.props')
    const dispatch = useDispatch()
   
    const myCharacter = useSelector((state=> state.detail))
    
    const {id}=useParams()

    useEffect(()=>{
        console.log('effect')
      dispatch(getDetails(id))
      
    },[dispatch,id])

    console.log(myCharacter)
    

    return(
        <div>
            {
            myCharacter.length>0 ?
            <div>
                <h1> {myCharacter.name}</h1>
                <img src = {myCharacter.image}/>
                <h2> Status: {myCharacter.height}</h2>
                <p>Nacimiento: {myCharacter.weight} </p>
               
                
             </div> : <p> CARGANDO... </p>
        
            } 
            <Link to='/home'>
                <button> Volver </button>
            </Link>
        </div>
    )
}