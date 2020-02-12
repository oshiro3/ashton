import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import http from '../lib/http';
import { setToken, setLogin } from '../redux/actions/login';
 
class LoginForm extends Component {
	constructor(){
		super();
		this.state = {
			username: null,
			password: null,
			loading: false
		}
		this.onChangeUserName = this.onChangeUserName.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
  }
  
  onButtonPress() {
		this.setState({loading: true})
    http
      .post('/auth', data = {
			  username: this.state.username, password: this.state.password
		  })
      .then((res) => {
        this.props.onSetToken(res.data.access_token)
        this.props.onSetLogin(true)
      })
			.then(() => this.props.navigation.navigate('MainScreen'))
			.catch((res) => {
        alert(JSON.stringify(res))
        this.props.onSetLogin(false)
      })
      .finally(() => this.setState({loading: false}));
  }
  
	onChangeUserName(username){
		this.setState({username: username})
  }

	onChangePassword(password){
		this.setState({password: password})
	}
 
  loadSpinner() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />
  }
 
		return (
			<TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>
					ログイン
				</Text>
			</TouchableOpacity>
		)
	}
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <TextInput
              placeholder="username"
              value={this.state.username}
              onChangeText={username => this.onChangeUserName(username)}
              style={styles.inputStyle}
            />
        </View>
        <View style={styles.wrap}>
          <TextInput
              secureTextEntry
              placeholder="password"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={password => this.onChangePassword(password)}
              style={styles.inputStyle}
            />
        </View>
 
        <View style={styles.wrap}>
          {this.loadSpinner()}
        </View>
 
        <Text>
          {this.props.loggedIn}
        </Text>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetToken: (token) => dispatch(setToken(token)),
    onSetLogin: (bool) => dispatch(setLogin(bool))
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
 
const styles = {
	container: {
		paddingTop: 150
	},
  wrap: {
    padding: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    borderWidth: 1,
    borderColor: '#333'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);