import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './src/screens/main';
import { EnviromentScreen } from './src/navigation/navigation';

class App extends React.Component {
  render() {
    return (
        <Container style={styles.container}>
          <Main navigation={this.props.navigation}/>
        </Container>
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

const AppNavigator = createStackNavigator({
  MainScreen,
  EnviromentScreen
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
