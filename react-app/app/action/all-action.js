/**
  @author Rohan Patil
  @description creating and exporting action objects that are defined in 'action-type.js'
*/

//for multiple imports
import * as types from './action-type.js'

/*
	@function function act1Func(data)
	@description creating and exporting action function
	@param {data object}
	@return {type , data}
*/
export function act1Func(data) {
	return {
		type:types.ACT1,
		data
	}
}

export function actAddFunc(data) {
	return {
		type:types.ACDADD,
		data
	}
}

export function actDelFunc(data) {
	return {
		type:types.ACTDEL,
		data
	}
}

export function actSubmitFunc(data) {
	return {
		type:types.ACTSUBMITADD,
		data
	}
}


