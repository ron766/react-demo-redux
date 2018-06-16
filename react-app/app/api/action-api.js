/**
  @author Rohan Patil
  @descriptioncreating an api for the action and dispatching the action to the 'reducer'
*/

/*importing store*/
import store from '../store.js'

/*importing action abject file*/
import {act1Func , actAddFunc} from '../action/all-action.js'

/*importing axios for api calls*/
import axios from 'axios';

/*
	@function apiAct1Func()
	@description make api call and get rsponse
	@return axios api call which returns response got from
*/
export function apiAct1Func() {
	return axios.get('/api')
					.then(response => {
						store.dispatch(act1Func(response));
						return response;
					})	 
}

export function apiActAddFunc(name) {
	return axios.post('/buttonpress' , {
		name
	})
					.then(response => {
						store.dispatch(actAddFunc(response));
						return response;
					})	 
}

export function apiActDelFunc(id) {
	// id = id;
	return axios.delete('/delete?id='+id)
					.then(response => {
						store.dispatch(actDelFunc(response));
						return response;
					})	 
}

export function apiActSubmitFunc(name) {
	console.log("nnnnnnnnnnnnnnnnnnnn",name);
	return axios.post('/submitAdd' , {
											name
									})
									.then(response => {
										store.dispatch(actSubmitFunc(response));
										return response;
									})	  
}

