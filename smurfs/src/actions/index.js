/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';

let nextSmurfId = 0;

export const addSmurf = text => ({
	type : 'ADD_SMURF',
	id   : nextSmurfId++,
	text,
});

export const getSmurfs = name => dispatch => {
	dispatch({ type: FETCH_SMURF_START });
	axios
		.get('localhost:3333/smurfs')
		.then(res => {
			console.log(res);
			dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_SMURF_ERROR }));
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
