//index file for reducer

import {combineReducers} from 'redux';

import allReducer from './all-reducer.js'

var reducers = combineReducers({red1:allReducer})

export default reducers;

