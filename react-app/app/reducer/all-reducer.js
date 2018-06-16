import * as red from '../action/action-type.js'

const initialState = {
	initial : [] ,
	add : [] ,
	delete : [],
	submit : []
}

const allReducer = (state=initialState , action) => {
	switch(action.type) {
		case red.ACT1 : 
			return Object.assign({} , state , {initial:action.data})

		case red.ACDADD : 
		 	return Object.assign({} , state , {add:action.data})

		case red.ACTDEL : 
		 	return Object.assign({} , state , {delete:action.data})

		case red.ACTSUBMITADD : 
		 	return Object.assign({} , state , {submit:action.data}) 	
	}
	return state;
}

export default allReducer;

//ss