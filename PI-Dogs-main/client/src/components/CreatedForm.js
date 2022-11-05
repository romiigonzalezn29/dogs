import React, {useState,useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import {getTemperaments, postDogs} from '../accions';
import {useDispatch, useSelector} from 'react-redux';
import style from './CreatedForm.module.css'

export default function CreatedForm() {
	const dispatch = useDispatch();
	const temperamentos = useSelector((state) => state.temperaments)

	const [input,setInput] = useState({
		name:"",
		height:"",
		weight:"",
		life_span:"",
        image:"",
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
        image:"",
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
		<form className={style.form}
		onSubmit={(e)=>handleSubmit(e)}>
			<div>
				<label className={style.letras}>Nombre:</label>
				<input className={style.input}
				type="text"
				value={input.name}
				name="name"
				onChange={(e)=>handleChange(e)} 
				/>
			</div>
			<div>
				<label className={style.letras}>Altura: </label>
				<input className={style.input}
				type="text"
				value={input.height}
				name="height"
				onChange={(e)=>handleChange(e)}
				/>
			</div>
			
			 <div>
			 <label className={style.letras}>Peso: </label>
			 <input className={style.input}
			 type="text"
			 value={input.weight}
			 name="weight"
			 onChange={(e)=>handleChange(e)}
			 />
			 </div>
			  <div>
			 <label className={style.letras}>Esperanza de vida: </label>
			 <input className={style.input}
			 type="text" 
			 value={input.life_span}
			 name="life_span"
			 onChange={(e)=>handleChange(e)}
			 />
			 </div>
             <div>
			 <label className={style.letras}>Imagen:</label>
			 <input className={style.input}
			 type="text" 
			 value={input.image}
			 name="image"
			 onChange={(e)=>handleChange(e)}
			 />
             
			 </div>
			 <select onChange={(e)=>handleSelect(e)}>
                {temperamentos.map((t) => (
                    <option key={t.id} value={t.name} >{t.name}</option>
                ))}
             </select>
             <ul><li>{input.temperament.map(el => el   + ", ")}</li></ul>
			  <button className={style.button} type='submit'>Crear personaje</button>
			 
		</form>
        </div>
    )
    }