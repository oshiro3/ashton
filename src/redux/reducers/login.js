import { SESSION, LOGIN } from '../actions/login';

const initialState = {
	access_token: "",
	login: false,
};

function login(state = initialState, action) {
  switch (action.type) {
		case SESSION:
			return Object.assign({}, state, {
				access_token: action.access_token
			})
		case LOGIN:
			return Object.assign({}, state, {
				login: action.result
			})
		default:
			return state
  }
}

export default login;
