import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import Buttons from './components/Buttons';
import update from 'immutability-helper';
import math from 'mathjs';

class App extends Component {
	constructor() {
		super();
		this.state = { operations: [] };
	}

	calculateOperations = () => {
		let result = this.state.operations.join('');
		if (result) {
			result = math.eval(result);
			this.setState({
				operations: [ result ]
			});
		}
	};

	handleClick = (e) => {
		const value = e.target.getAttribute('data-value');
		const ops = [ '*', '-', '+', '/' ];
		const lastOperation = this.state.operations[this.state.operations.length - 1];
		switch (value) {
			case 'C': // clear operations
				this.setState({
					operations: []
				});
				break;
			case '=': //calculate result
				this.calculateOperations();
				break;
			default:
				// append new operation
				if (
					!lastOperation ||
					ops.indexOf(value) === -1 ||
					(ops.indexOf(value) > -1 && ops.indexOf(lastOperation) === -1)
				) {
					const newOperations = update(this.state.operations, {
						$push: [ value ]
					});
					this.setState({
						operations: newOperations
					});
				}
				break;
		}
	};

	render() {
		return (
			<div className="App container col-md-8">
				<Display data={this.state.operations} />
				<Buttons>
					<table className="table table-bordered table-dark">
						<tbody>
							<tr>
								<td>
									<Button onClick={this.handleClick} label="7" value="7" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="8" value="8" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="9" value="9" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="/" value="/" />
								</td>
							</tr>
							<tr>
								<td>
									<Button onClick={this.handleClick} label="4" value="4" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="5" value="5" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="6" value="6" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="x" value="*" />
								</td>
							</tr>
							<tr>
								<td>
									<Button onClick={this.handleClick} label="1" value="1" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="2" value="2" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="3" value="3" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="-" value="-" />
								</td>
							</tr>
							<tr>
								<td>
									<Button onClick={this.handleClick} label="C" value="C" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="0" value="0" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="=" value="=" />
								</td>
								<td>
									<Button onClick={this.handleClick} label="+" value="+" />
								</td>
							</tr>
						</tbody>
					</table>
				</Buttons>
			</div>
		);
	}
}

export default App;
