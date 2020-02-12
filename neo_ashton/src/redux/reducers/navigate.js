import { NAVIGATE } from '../actions/navigate';

const initialState = {
    navigation: 'LoginScreen',
};

function navigate(state = initialState, action) {
	switch (action.type) {
		case NAVIGATE:
			return Object.assign({}, state, {
				navigate: action.navigate
			})
		default:
			return state
	}
}

export default navigate;
