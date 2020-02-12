import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


class EnviromentButton extends Component {
  render() {
    return (
      <Content style={styles.content}>
        <Button transparent  style={{height: 100}} onPress={() => this.props.navigation.navigate('EnviromentScreen')}>
          <Icon name='explore' size={80} style={{color: 'grey'}}/>
        </Button>
        <Text style={{paddingLeft: 5}}>enviromet</Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 45,
    paddingTop: 40,
  },
});

export default EnviromentButton;
