import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import React, { Component } from 'react';

export class Smurfs extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div>
				{this.props.smurfs.map(smurf => (
					<div>
						<h1>{smurf.name}</h1>
						<h1>{smurf.age}</h1>
						<h1>{smurf.height}</h1>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs    : state.smurfs,
		getSmurfs : state.getSmurfs,
	};
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
