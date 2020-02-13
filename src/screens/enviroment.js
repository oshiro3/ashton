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

class Enviroment extends Component {
	constructor(){
		super();
		this.fetch = this.fetch.bind(this);
		this.reload = this.reload.bind(this);
	}
	
	state = {
		loadTemperature: true,
		loadHumidity: true,
		loadMoment: true,
	};
  
  	componentWillMount() {
		this.fetch()
	};
	
	fetch(){
		// alert(JSON.stringify(this.props))
		fetchTemperature(this.props.login.access_token)
			.then((res) => this.setState({ temperature: res.data.temperature }))
			.catch((res) => alert(res))
			.finally(() =>{this.setState({ loadTemperature: false })});
		fetchHumidity(this.props.login.access_token)
			.then((res) => this.setState({ humidity: res.data.humidity }))
			.catch((res) => alert(JSON.stringify(res)))
			.finally(() =>{this.setState({ loadHumidity: false })});
		this.setState({ loadMoment: false })
	};

	reload(){
		this.setState({ 
			loadTemperature: true,
			loadHumidity: true,
			loadMoment: true
		});
		this.fetch()
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
                  <Text style={{fontSize: 40, paddingRight: 0}}>Enviroment</Text>
                  	{this.state.loadMoment ? 
						<ActivityIndicator size="small" color="#00ff00" /> :
						<Text note style={{fontSize: 20}}>{moment().tz("Asia/Tokyo").format('MM/DD(dd) HH:mm:ss')
					}</Text>}
                </Body>
					<Button transparent onPress={this.reload}>
						<Icon type='MaterialIcons' name='cached' style={{fontSize: 40}}/>
					</Button>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <CardItem bordered>
					<Body>
						<Text style={{fontSize: 30}}>Temperature</Text>
						{this.state.loadTemperature ? <ActivityIndicator size="small" color="#00ff00" /> :
						<Text style={{padding: 10, fontSize: 40}}>{this.state.temperature}℃{"\t"}
							<Icon type='MaterialIcons' name={'brightness-5'} style={{fontSize: 40, color: 'orange',}}/></Text>}
					</Body>
                </CardItem>
                <CardItem bordered>
					<Body>
						<Text style={{fontSize: 30}}>Humidity</Text>
						{this.state.loadHumidity ? <ActivityIndicator size="small" color="#00ff00" /> :
						<Text style={{padding: 10, fontSize: 40}}>{this.state.humidity}%{"    "}
							<Icon name='cloud' style={{fontSize: 40, color: 'orange'}}/></Text>}
					</Body>
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

const Env = connect(mapStateToProps, mapDispatchToProps)(Enviroment)

export default class Box extends Component {

  render() {
    return (
      <Provider store={store}>
				<Env navigation={this.props.navigation}/>
      </Provider>
    );
  }
}
