import React from 'react';

import store from '../../store.js'

import {connect} from 'react-redux'

import {apiAct1Func} from '../../api/action-api';

class Home extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		apiAct1Func().then (res=> {
			}
		)
	}
	

	render() {
		console.log(this.props.propKey);
		return (
			<div>
				Home
			</div>
		)
	}
}

function mapStateToProps(argument) {
	console.log(argument);
	return {
		propKey : argument.red1.initial.data
	}
}

export default connect(mapStateToProps)(Home);