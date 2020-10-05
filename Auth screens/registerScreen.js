import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ImageBackground,StatusBar } from 'react-native';
import * as firebase from 'firebase';

import {Ionicons} from '@expo/vector-icons'

export default class RegisterScreen extends React.Component {
    static navigationOptions={
        headerShown:false
    };


    state={
        name:"",
        email: "",
        password: "",
        errorMessage:null
    }

    handleSignUp=()=>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(userCredentials=>{
            return userCredentials.user.updateProfile({
                displayName:this.state.name
            })
        })
        .catch(error=>this.setState({errorMessage:error.message}))
    }
    
render(){
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <ImageBackground
        source={require('../assets/header.png')}
        style={{width:'100%',height:220}}
        imageStyle={{borderBottomRightRadius:65}}
        ></ImageBackground>
        
        <TouchableOpacity style={styles.back} onPress={()=>this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={32} color='#fff'></Ionicons>
        </TouchableOpacity>

        <View style={{position: 'absolute',top:64,alignItems:'center',width:'100%'}}>
            <Text style={styles.greeting}>{`Hello!\nSign Up to Get Start`}</Text>
        </View>

        <TouchableOpacity style={styles.avatar}>
            <Ionicons name="ios-add" size={40} color={'#fff'} style={{alignSelf:'center'}}></Ionicons>
        </TouchableOpacity>

        <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>

            <View>
                <Text style={styles.inputTitle}>Full Name</Text>
                <TextInput 
                style={styles.input} 
                autoCapitalize="none" 
                onChangeText={name=>this.setState({name})}
                value={this.state.name}
                ></TextInput>
            </View>

            <View style={{marginTop:32}}>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput 
                style={styles.input} 
                autoCapitalize="none" 
                onChangeText={email=>this.setState({email})}
                value={this.state.email}
                ></TextInput>
            </View>

            <View style={{marginTop:32}}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput 
                style={styles.input} 
                secureTextEntry autoCapitalize="none"
                onChangeText={password=>this.setState({password})}
                value={this.state.password}
                ></TextInput>
            </View>

            <TouchableOpacity 
            style={styles.button} onPress={this.handleSignUp}
            >
                <Text style={{color:'#fff',fontWeight:'500'}}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={{alignSelf:'center',marginTop:32}}
            onPress={()=>this.props.navigation.navigate("Login")}
            >
                <Text style={{color:'#414959',fontSize:13}}>
                    Have Account? <Text style={{fontWeight:'500',color:'#E9446A'}}>Log In</Text>
                </Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  greeting:{
      marginTop:32,
      fontSize:18,
      fontWeight:"400",
      textAlign:'center',
      color:'red'
  },
  errorMessage:{
      height:72,
      alignItems:"center",
      justifyContent:'center',
      marginHorizontal:30
  },
  error:{
      color:"#e9446a",
      fontSize:13,
      fontWeight:"600",
      textAlign:'center'
  },
  form:{
      marginBottom:48,
      marginHorizontal:30
  },
  inputTitle:{
      color:'#8a8f9e',
      fontSize:10,
      textTransform:'uppercase'
  },
  input:{
    borderBottomColor:'#8a8f9e',
    borderBottomWidth:StyleSheet.hairlineWidth,
    height:40,
    fontSize:15,
    color:'#161f3d'
  },
  button:{
      marginTop:30,
      marginHorizontal:30,
      backgroundColor:'#e9446a',
      borderRadius:4,
      height:52,
      alignItems:'center',
      justifyContent:'center'
  },
  back:{
      position:'absolute',
      top:20,
      left:20,
      width:40,
      height:40,
      borderRadius:20,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center'
  },
  avatar:{
      width:100,
      height:100,
      borderRadius:50,
      backgroundColor:'red',
      marginTop:-20,
      alignSelf:'center',
      justifyContent:'center',
      alignContent:'center'
  }
});
