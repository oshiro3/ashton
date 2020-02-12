import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Container,Button } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/main';
import { EnviromentScreen, LoginScreen } from './src/navigation/navigation';
import store from './src/redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container style={styles.container}>
          <Main navigation={this.props.navigation}/>
        </Container> 
      </Provider>
    );
  }
}

const MainScreen = {
  screen: App,
  navigationOptions: ({ navigation }) => {
    return {
      title: 'HOME',
    };
  },
};

export const AppNavigator = createStackNavigator({
  MainScreen,
  EnviromentScreen,
  LoginScreen
},
{
  initialRouteName: 'MainScreen',
});

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});

export default createAppContainer(AppNavigator);
