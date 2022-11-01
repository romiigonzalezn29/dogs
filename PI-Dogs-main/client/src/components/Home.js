import React from "react";
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { dogsFront, orderByName } from "../accions";
import Card from "./Card";
import style from './Home.module.css'
import NavBar from "./NavBar";
import Paginado from "./Paginado";
export default function Home(){
    const dispatch = useDispatch()
    const dogs = useSelector((state)=> state.dogs)
    const [orden, setOrden] = useState('')


const[currentPage, setCurrentPage]=useState(1);

const[dogPerPg]=useState(9);
const inLastDog= currentPage*dogPerPg;
const inFirstDog= inLastDog-dogPerPg;
const currentDog=dogs.slice(inFirstDog,inLastDog);
 

const paginado=(pageN)=>{
  setCurrentPage(pageN)
}
    useEffect(()=>{
        dispatch(dogsFront())
    },[dispatch])



    function handleName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`ordenado ${e.target.value}`)
    }
    
  

    return (
        <div>
            <div className={style.paginado}>
            <h1>Buscador de razas</h1>

            <NavBar/>
            
           
           
         
         
        </div>
        <button  value='asc' onClick={e=> handleName(e)}>A - Z</button>
            <button value='des' onClick={e=> handleName(e)}>Z - A</button>
            <button  value='all' onClick={e=> handleName(e)}>All</button>
            <Paginado dogPerPg={dogPerPg} dogs={dogs.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <div className={style.card} >
            
            {
                    currentDog?.map((c)=> {
                        return (
                            <div  key={c.id}>
                                <Link to = {"/dogs/" + c.id} >
                                <div>
                                    <Card name={c.name} 
                                    image={c.image} 
                                    temperament={c.temperament}
                                    life_span={c.life_span} 
                                    height={c.height} 
                                    weight={c.weight} />
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

