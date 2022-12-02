
import axios from 'axios'; 

import { hostBack, hostDeploy } from '../assets/constants';
 
export function dogsFront(){
    return async function(dispatch){
         let json = await axios.get(`${hostDeploy}/dogs`  
        /* let json = await axios.get(`${hostBack}/dogs` */
        ,{
    
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
         let json = await axios.get(`${hostDeploy}/temperaments` 
         /* let json = await axios.get(`${hostBack}/temperaments`  */
        ,{
        
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
        const response = await axios.post(`${hostDeploy}/dogs`, payload)  
       /*  const response = await axios.post(`${hostBack}/dogs`, payload) */ 
    
    return response;
    }
}
export function namesOfDogs(name){
    return async function(dispatch){
        try {
             let json = await axios (`${hostDeploy}/dogs?name=` + name)  
            /*  let json = await axios (`${hostBack}/dogs?name=` + name)  */
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
                 var json = await axios.get(`${hostDeploy}/dogs/${id}`) 
                /* var json = await axios.get(`${hostBack}/dogs/${id}`)  */
                
                return dispatch({
                type: 'GET_DETAILS' ,
                payload: json.data
            })
            } catch (error) {
                console.log(error);
            }
            }
        }
