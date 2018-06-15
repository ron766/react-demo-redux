import * as red from '../action/action-type.js'

const initialState = {
	initial : []
}

const allReducer = (state=initialState , action) => {
	switch(action.type) {
		case red.ACT1 : return Object.assign({} , state , {initial:action.data})
	}
	return state;
}

export default allReducer;

//ss