import React from 'react';
import { connect } from 'react-redux';
import Smurfs from '../components/Smurfs';
import { getSmurfs } from '../actions/index';
import  SmurfForm  from '../components/SmurfForm'

export class SmurfsView extends React.Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		if (this.props.fetching) {
			return <h1>We are finding your Smurfs!</h1>;
		}
		return (
			<div>
				<SmurfForm />
				<Smurfs smurfs={this.props.smurfs} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	smurfs         : state.smurfsReducer.smurfs,
	fetchingSmurfs : state.smurfsReducer.fetchingSmurfs,
	addingSmurf    : state.smurfsReducer.addingSmurf,
	error          : state.smurfsReducer.error,
});

export default connect(mapStateToProps, {
	getSmurfs,
})(SmurfsView);
