import React, { Component } from 'react';
class Display extends Component {
	state = {};
	render() {
		const res = this.props.data.join('');
		return (
			<div className="Display container col-md-6">
				<h1 className="border border-dark fill-div m-0" style={{ textAlign: 'right', overflow: 'hidden' }}>
					{res ? res : 0}
				</h1>
			</div>
		);
	}
}

export default Display;
