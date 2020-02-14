import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Container, Content, Card, CardItem, Text, Icon, Left, Button, Body, Toast } from 'native-base';
import { ActivityIndicator } from 'react-native'

import moment from 'moment-timezone';
import { fetchTemperature, fetchHumidity } from '../api/enviroment'
import store from '../redux/store';


const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => {
	return {
	}
}

class Window extends Component {
	constructor(){
		super();
		// this.fetch = this.fetch.bind(this);
		// this.reload = this.reload.bind(this);
	}

  render() {
    return (
      <Container>
        <Content>
          <Card transparent style={{flex: 0}}>
            <CardItem>
              <Left>
                <Icon name='explore' type='MaterialIcons' size={40} style={{color: 'black'}}/>
                <Body>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <CardItem bordered>
                </CardItem>
                <CardItem bordered>
					<Body>
						<Text style={{fontSize: 30}}>Dusty</Text>
						<Text style={{padding: 10, fontSize: 20}}>Development...</Text>
					</Body>
                </CardItem>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const WindowConect = connect(mapStateToProps, mapDispatchToProps)(Window)

export default class Box extends Component {

  render() {
    return (
      <Provider store={store}>
				<WindowConect navigation={this.props.navigation}/>
      </Provider>
    );
  }
}
