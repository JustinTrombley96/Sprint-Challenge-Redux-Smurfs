import React from 'react';

export const Smurfs = props => {
	return (
		<ul>
			{props.smurfs.map(smurf => {
				<div>
					<h1>{smurf.name}</h1>
					<h1>{smurf.age}</h1>
					<h1>{smurf.height}</h1>
				</div>;
			})}
		</ul>
	);
};

export default Smurfs;
