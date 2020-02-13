import Enviroment from '../screens/enviroment';
import LoginForm from '../screens/login';

export const EnviromentScreen = {
	screen: Enviroment,
	navigationOptions: ({ navigation }) => {
		return {
			title: 'Enviroment',
		};
	},
};

export const LoginScreen = {
	screen: LoginForm,
	navigationOptions: ({ navigation }) => {
		return {
			title: 'Login',
		};
	},
};
