import React from 'react';
import { Router , Route , browserHistory , IndexRoute } from 'react-router';

//import components
import Home from './components/containers/home';
import Main from './components/layout/main';

//creating router for a component and exporting
export default (
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home}/>
		</Route>
	</Router>
)