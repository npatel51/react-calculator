import React, { Component } from 'react';

class Buttons extends Component {
	state = {};
	render() {
		return <div className="Buttons container col-md-6">{this.props.children}</div>;
	}
}

export default Buttons;
