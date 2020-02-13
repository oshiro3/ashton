export const SESSION = 'SESSION';
export const LOGIN = 'LOGIN';

export function setToken(access_token) {
	return {
		type: SESSION,
		access_token
	}
};

export function setLogin(result) {
	return {
		type: LOGIN,
		result
	}
};
