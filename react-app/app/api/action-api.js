import store from '../store.js'

import {act1Func} from '../action/all-action.js'

import axios from 'axios';

export function apiAct1Func() {
	return axios.get('/api')
					.then(response => {
						store.dispatch(act1Func(response));
						return response;
					})	 
}