import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body } from 'native-base';

import moment from 'moment';
import { fetchTemperature, fetchHumidity } from '../api/enviroment'


export default class Enviroment extends Component {
	state = {
		temperature: 26,
		humidity: 60
	};
	// this.setState({temperature:((JSON.parse(new TextDecoder().decode(value))['temperature']))})
  
  componentDidMount() {
		// fetchTemperature().then((res) => res.body.getReader()).then((reader) => {
		// 	reader.read().then(({done, value}) => {
		// 		alert((JSON.parse(new TextDecoder().decode(value))['temperature']))
		// 	});
		// }).catch(err => console.log(err))
		fetchTemperature().then((res) => alert(res)).catch((res) => alert(res))

		this.setState({
			// temperature: fetchTemperature(),
			humidity: fetchHumidity()
		})
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
                  <Text style={{fontSize: 40}}>Enviroment</Text>
                  <Text note style={{fontSize: 20}}>{JSON.stringify(moment())}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <CardItem bordered>
                    <Body>
                        <Text style={{fontSize: 30}}>Temperature</Text>
                        <Text style={{padding: 10, fontSize: 40}}>{this.state.temperature}℃{"\t"}
                            <Icon type='MaterialIcons' name={'brightness-5'} style={{fontSize: 40, color: 'orange',}}/></Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text style={{fontSize: 30}}>Humidity</Text>
                        <Text style={{padding: 10, fontSize: 40}}>{this.state.humidity}%{"    "}
                            <Icon name='cloud' style={{fontSize: 40, color: 'orange'}}/></Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text style={{fontSize: 30}}>Dusty</Text>
                        <Text style={{padding: 10, fontSize: 20}}>Development...</Text>
                        {/* <Text style={{padding: 10, fontSize: 40}}>{state.humidity}%{"    "}
                            <Icon name='cloud' style={{fontSize: 40, color: 'orange'}}/></Text> */}
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