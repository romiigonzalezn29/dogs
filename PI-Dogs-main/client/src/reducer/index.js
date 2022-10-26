const initialState = {
	dogs : [],
	allDogs:[],
	temperaments:[],
	detail:[],
}
 
function rootReducer (state= initialState, {type , payload}) {
switch (type) {
	case 'DOGS_FRONT':
		return {
			...state,
			dogs: payload,
			allDogs: payload
		}
	case 'GET_TEMPERAMENTS':
		return{
			...state,
			temperaments: payload
		}
	 
		case 'POST_DOGS':
			return {
				...state
			}
	case 'NAME_OF_DOGS':
		return{
			...state,
			dogs: payload
		}
		case 'ORDER_BY_TEMPERAMENT':
			
			if(payload === "all") {
				return {
					...state,
					dogs: state.allDogs
				}
			} else {
				return {
					...state,
					dogs: state.dogs.filter(e => e.temperament?.includes(payload))
				} 
			}
	case 'CREATED_DB':
		const allDogs2 = state.allDogs
			const createdFilter = payload === 'created'? allDogs2.filter(el => el.createdDb) : allDogs2.filter(el => !el.createdDb);
			return {
				...state,
				dogs: payload === 'all'? state.allDogs : createdFilter
			}
			case 'GET_DETAILS' :
				console.log(payload)
				return {
					...state,
					detail: payload
				}
			case 'ORDER_BY_NAME':
				
				let sortedArr = payload === 'asc' ?
				state.dogs.sort(function(a,b) {
					if (a.name  > b.name) {
						return 1;
					}
					if (b.name > a.name) {
						return  -1; 
	
					}
					return 0
				}) :
				state.dogs.sort(function(a,b) {
					if (a.name  > b.name) {
						return -1;
					}
					if (b.name > a.name) {
						return  1; 
	
					}
					return 0
				})
				return {
					...state,
					dogs: sortedArr
				}
	default:
		return state;
}
}

export default rootReducer