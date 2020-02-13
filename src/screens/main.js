import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Text} from 'native-base';
import EnviromentButton from '../components/buttons/enviroment_button';
import WindowButton from '../components/buttons/window_button';
import Login from './login';


const mapStateToProps = (state) => ({
  login: state.login,
});

class Main extends Component {

  render() {
    const { login } = this.props
    return (
      <Container>
        { login.login ?
          <Container style={styles.content}>
              <EnviromentButton navigation={this.props.navigation}/>
              <WindowButton/>
          </Container> :
          <Container style={styles.container}>
            <Login navigation={this.props.navigation}/>
          </Container>
        }
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

export default connect(mapStateToProps)(Main)
