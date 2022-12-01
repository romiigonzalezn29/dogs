import React, {useState,useEffect} from "react";
import { createdDB, getTemperaments, orderByName, orderByTemperament} from "../accions";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar";
import style from './NavBar.module.css'



export default function NavBar(){
    const dispatch = useDispatch();
	const temperaments = useSelector((state) => state.temperaments);
   
  

    useEffect(()=> {
		dispatch(getTemperaments());
	}, [dispatch]);

  
    
    function handleTemperament(e){
        console.log(e.target.value)
        dispatch(orderByTemperament(e.target.value))
    }

    function handleCreated(e){
        console.log(e.target.value)
        dispatch(createdDB(e.target.value))
    }

  return (
    <div className={style.bloques}> 
        
            
            <div >
            <SearchBar/>
        </div>
         <div className={style.botones}>
        <div>
        <Link to = '/dogs' >
                <button className={style.button}>
                    Crear Perrito
                </button>
            </Link>
        </div>
         
    <div >
       
       </div>
       <div>
        <select onChange={e=> handleTemperament(e)}>
            {temperaments?.map((temp)=> (
                <option key={temp.id} value={temp.name}>{temp.name}</option>
            ))}
        </select>
        </div>
        <div>
        <button className={style.button} value='all' onClick={e=> handleTemperament(e)}>Quitar filtros</button>
        </div>
        </div>
    
    <div className={style.ordenamientos}> 
       
        <button className={style.button} value='api' onClick={e=> handleCreated(e)}>Existentes</button>
        <button className={style.button} value='created' onClick={e=> handleCreated(e)}>Creados</button>
        <button className={style.button} value='all' onClick={e=> handleCreated(e)}>Todos</button>
    </div>

</div>
  )
}

