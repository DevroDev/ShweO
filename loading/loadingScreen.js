import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component {
    componentDidMount(){
      setTimeout(() => {
        this.props.navigation.navigate('Lessons');
        }, 1000);
            
    }
    
render(){
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom:20,fontSize:18}}>You purchase is processing</Text>
      <ActivityIndicator size={80} color={'red'}></ActivityIndicator>
    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
