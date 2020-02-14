import Enviroment from '../screens/enviroment';
import Window from '../screens/window';
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

export const WindowScreen = {
	screen: Window,
	navigationOptions: ({ navigation }) => {
		return {
			title: 'Window',
		};
	},
};
