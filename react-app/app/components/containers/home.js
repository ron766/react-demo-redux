import React from 'react';

import store from '../../store.js'

import {connect} from 'react-redux'

import {apiAct1Func , apiActAddFunc , apiActDelFunc , apiActSubmitFunc} from '../../api/action-api';

class Home extends React.Component {
	constructor() {
		super();
		this.submitData = this.submitData.bind(this);
	}

	componentWillMount() {
		apiAct1Func().then (res=> {
			}
		)
	}

	submitData(e) {
		e.preventDefault();
		const node = this.refs.name.value;
		console.log("hi",node);
		apiActSubmitFunc(node).then (res=> {
			}
		)
		apiAct1Func();
	}

	componentWillReceiveProps(nextProps) {
    console.log("prop",nextProps);
  }
	

	render() {
		console.log("!!!!!!!",this.props.propKey);
		return (
			<div>
				Home
				<br/>
				
				<form onSubmit={this.submitData}>
					<span>Username: </span><input type="text" ref="name"/>
					<button type="submit">Click to add</button>
				</form>
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