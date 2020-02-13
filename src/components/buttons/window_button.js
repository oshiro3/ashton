import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class WindowButton extends Component {

  render() {
    return (
        <Content style={styles.content}>
            <Icon name='beenhere' size={75} style={{color: 'grey'}}/>
            <Text style={{paddingLeft:15}}>window</Text>
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
