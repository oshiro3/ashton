import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon, Grid } from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import EnviromentButton from '../components/buttons/enviroment_button';
import WindowButton from '../components/buttons/window_button';

// const state = 111;

export default class Main extends Component {
  componentDidMount(){
    // alert(state);
  }

  render() {
    return (
      <Container>
        <Container style={styles.content}>
            <EnviromentButton navigation={this.props.navigation}/>
            <WindowButton/>
        </Container>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
});
