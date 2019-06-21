/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import  { Smurfs }  from './Smurfs';
import { getSmurfs } from '../actions/index';
import { SmurfForm } from './SmurfForm';

export class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		if (this.props.fetchingSmurfs) {
			return <h1>We are finding your Smurfs!</h1>;
		}
		return (
			<div>
				<SmurfForm addSmurf= {this.props.addSmurf} />
				<Smurfs smurfs={this.props.smurfs} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	smurfs         : state.smurfs,
	fetchingSmurfs : state.fetchingSmurfs,
	addingSmurf    : state.addingSmurf,
	error          : state.error,
});

export default connect(mapStateToProps, {
	getSmurfs,
})(App);
