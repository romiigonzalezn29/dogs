import React , {useState,useEffect} from "react";

import {namesOfDogs } from "../accions";
import {useDispatch, useSelector} from 'react-redux';
import style from './SearchBar.module.css'
export default function SearchBar(){
    const dispatch = useDispatch();
	
    const [name,setName] = useState("")
	


	function handleInputChange(e){
		e.preventDefault()
		setName(e.target.value)
		console.log(name)
	}
	function handleSubmit(e) {
		e.preventDefault()
		dispatch(namesOfDogs(name))
	}

   

    return(
        <>
        <div className={style.search}>

        <input className={style.input} type='text' 
        placeholder= 'Buscar...'
        onChange  = {(e)=> handleInputChange(e)}/>
        <button className={style.button}  type='submit' onClick = {(e)=>handleSubmit(e)}>Buscar</button>

         </div>
        
        </>
    )
}