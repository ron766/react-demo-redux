// import ACT1 from 'action-type.js' basic syntx

//for multiple imports
import * as types from './action-type.js'

export function act1Func(data) {
	return {
		type:types.ACT1,
		data
	}
}