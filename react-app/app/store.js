import reducers from './reducer/index.js'

import {createStore} from 'redux';

var store = createStore(reducers);

export default store;