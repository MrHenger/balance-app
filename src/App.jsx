import React, { Component } from 'react'
import Header from "./Components/Header";
import ConsolidatedPosition from "./Components/ConsolidatedPosition";
import Operations from "./Components/Operations";

export default class App extends Component {

	constructor(){
		const operations = [
			{
				value: 100
			},
		];
		super();
		this.state = {
			operations
		}

		this.addOperations = this.addOperations.bind(this);
		this.removeOperations = this.removeOperations.bind(this);
	}

	addOperations(operation)
	{
		this.setState({
			operations: [...this.state.operations, operation]
		});
		console.log(this.state.operations);
	}

	removeOperations(index)
	{
		this.setState({
			operations: this.state.operations.filter((e, i) => {
			  return i !== index;
			}),
		});
	}

	render(){
		return (
			<div className="App">
				<Header/>
				<div className="row justify-content-center mt-5">
					<div className="col-8 ">
						<ConsolidatedPosition balance={this.state.operations}/>
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					<div className="col-8">
						<Operations balance={this.state.operations} add={this.addOperations} remove={this.removeOperations}/>
					</div>
				</div>
			</div>
		);
	}
}
