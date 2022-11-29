import axios from 'axios';


export function dogsFront(){
    return async function(dispatch){
        let json = await axios.get('https://api-dog-prueba-production.up.railway.app/dogs',{
    
        })
        return dispatch({
            type: 'DOGS_FRONT',
            payload: json.data
        })
    }
}

export function getTemperaments(){
    return async function(dispatch){
        try {
        let json = await axios.get('https://api-dog-prueba-production.up.railway.app/temperaments',{
        
        })
        
        return dispatch({
            
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
    }
} 

export function postDogs(payload){
    return async function(dispatch){
        const response = await axios.post('https://api-dog-prueba-production.up.railway.app/dogs', payload)
    console.log(response)
    return response;
    }
}
export function namesOfDogs(name){
    return async function(dispatch){
        try {
            let json = await axios ('https://api-dog-prueba-production.up.railway.app/dogs?name=' + name)
return dispatch({
    type : 'NAME_OF_DOGS',
    payload: json.data
})
        } 
       catch (error) {
        console.log(error)
        }
 }
}

export function createdDB(payload){
    console.log('action', payload)
    return {
        type: 'CREATED_DB',
        payload
    }
}


export function orderByName(payload){
	
		return  {
			type: 'ORDER_BY_NAME',
			payload
		}
	
}
 
export function orderByTemperament(payload){
	
	return async function(dispatch){
		return dispatch ({
			type: 'ORDER_BY_TEMPERAMENT',
			payload
		})
	}
}

export function getDetails(id){
    console.log('entro detail accion')
        return async function (dispatch){
            try {
<<<<<<< HEAD
                var json = await axios.get(`https://api-dog-prueba-production.up.railway.app${id}`)
=======
                var json = await axios.get(`https://api-dog-prueba-production.up.railway.app/dogs/${id}`)
>>>>>>> ebc420dfd7416a1f56be4770f4f5b63c40e58153
                
                return dispatch({
                type: 'GET_DETAILS' ,
                payload: json.data
            })
            } catch (error) {
                console.log(error);
            }
            }
        }
