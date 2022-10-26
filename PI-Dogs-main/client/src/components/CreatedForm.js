import React, {useState,useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import {getTemperaments, postDogs} from '../accions';
import {useDispatch, useSelector} from 'react-redux';


export default function CreatedForm() {
	const dispatch = useDispatch();
	const temperaments = useSelector((state) => state.temperaments)

	const [input,setInput] = useState({
		name:"",
		height:"",
		weight:"",
		life_span:"",
        imagen:"",
		temperament:[]
	})

	function handleChange(e){
		setInput({
			...input,
			[e.target.name] : e.target.value
		})
		console.log("input",input)
	}
    
	function handleSelect(e){
        console.log(e.target.value)
		setInput({
			...input,
			temperament: [...input.temperament ,e.target.value]
		})
	}

	function handleSubmit(e) {
		e.preventDefault()
		
		dispatch(postDogs(input))
		alert("Perrito creado con exito")
		 setInput({
		name:"",
		height:"",
		weight:"",
		life_span:"",
        imagen:"",
		temperament:[]
		 }) 
	}


	useEffect(()=> {
		dispatch(getTemperaments());
	}, [dispatch]);

	return(
		<div>
            <Link to='/home'> <button>Volver a home</button></Link>
		<h1>Crea tus personajes</h1>
		<form onSubmit={(e)=>handleSubmit(e)}>
			<div>
				<label>Nombre:</label>
				<input
				type="text"
				value={input.name}
				name="name"
				onChange={(e)=>handleChange(e)} 
				/>
			</div>
			<div>
				<label>height:</label>
				<input 
				type="text"
				value={input.height}
				name="height"
				onChange={(e)=>handleChange(e)}
				/>
			</div>
			
			 <div>
			 <label>weight:</label>
			 <input
			 type="text"
			 value={input.weight}
			 name="weight"
			 onChange={(e)=>handleChange(e)}
			 />
			 </div>
			  <div>
			 <label>life_span:</label>
			 <input
			 type="text" 
			 value={input.life_span}
			 name="life_span"
			 onChange={(e)=>handleChange(e)}
			 />
			 </div>
             <div>
			 <label>Imagen:</label>
			 <input
			 type="text" 
			 value={input.imagen}
			 name="imagen"
			 onChange={(e)=>handleChange(e)}
			 />
             
			 </div>
			 <select onChange={(e)=>handleSelect(e)}>
                {temperaments.map((occ) => (
                    <option key={occ.id} value={occ.name} >{occ.name}</option>
                ))}
             </select>
             <ul><li>{input.temperament.map(el => el + ", ")}</li></ul>
			  <button type='submit'>Crear personaje</button>
			 
		</form>
        </div>
    )
    }