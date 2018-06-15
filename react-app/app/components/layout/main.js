import React from 'react';

class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Main;