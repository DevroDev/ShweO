import React,{useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';

import {colors} from '../assets/style';
import {Ionicons} from '@expo/vector-icons';

const ConsultantList=({navigation})=>{

  const [consultant,setconsultant]=useState([
    {image:{uri:'https://hips.hearstapps.com/esq.h-cdn.co/assets/17/25/1498080333-tj-miller.jpg'},name:'Erlic Backman',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder of Pied Piper',key:'1'},
    {image:{uri:'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1686,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1588038759/200427-last-laugh-Middleditch-tease_u69xgy'},name:'Richard Handricks',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'2'},
    {image:{uri:'https://cdn1.thr.com/sites/default/files/2018/05/jimmy_yang_4-h_2018.jpg'},name:'Jian Yang',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'3'},
    {image:{uri:'https://mms.businesswire.com/media/20180613005520/en/663164/5/Martin_Starr.jpg'},name:'Gilfoyle',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'4'},
    {image:{uri:'https://www1.pictures.zimbio.com/gi/Kumail+Nanjiani+Premiere+HBO+Silicon+Valley+_MAbBSOc4KHl.jpg'},name:'Dinesh',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'5'},
    {image:{uri:'https://pmcvariety.files.wordpress.com/2019/02/zach-woods.jpg?w=681&h=383&crop=1'},name:'Jared Dunn',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'6'},
    {image:{uri:'https://superstarsbio.com/wp-content/uploads/2019/09/amanda-crew.jpg'},name:'Monica',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'7'},
    {image:{uri:'https://www.celebheights.com/xr/m/matt-ross.jpg'},name:'Galvin Belson',desc:'Consulting is the business of providing expert advice to a specific group of people',exp:'co-founder',key:'8'}
  ])
  return(
    <View style={styles.container}>
    <View style={styles.header}>
        <View style={{paddingTop:12,paddingLeft:15}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Forum')}>
            <Ionicons name='md-arrow-back' color={'white'} size={30} style={{}}/>
          </TouchableOpacity>
        </View>
        <View style={{paddingRight:15}}>
          <Text style={{color:'white',alignSelf:'center',paddingTop:15,fontSize:18,fontWeight:'900'}}>Consultant For Business</Text>
        </View>
    </View>
        <FlatList
          data={consultant}
          renderItem={({item})=>{
            return(
              <View style={{width:'100%',backgroundColor:'#242424'}}>
                <Image source={item.image} style={{width:'100%',height:320}} />
                <View style={{paddingHorizontal:10}}>
                  <Text style={{color:'white',fontSize:20,paddingVertical:5}}>{item.name}</Text>
                  <View style={{flexDirection:'row'}}>
                    <Ionicons name="ios-briefcase" size={20} color={'white'} />
                    <Text style={{color:'white',paddingLeft:10,fontSize:16}}>{item.exp}</Text>
                  </View>
                  <View style={{flexDirection:'row',paddingTop:5}}>
                    <Ionicons name="ios-briefcase" size={20} color={'white'} />
                    <Text style={{color:'white',fontSize:16,paddingLeft:10}}>{item.desc}</Text>
                  </View>
                  <TouchableOpacity onPress={()=>navigation.navigate('ConsultantProfile')}>
                  <Text style={{paddingHorizontal:20,paddingVertical:10,borderColor:'white',
                  borderWidth:1,marginVertical:10,color:'white',textAlign:'center'}}>View Profile & Hire</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f1f1f1',
    height:'100%'
  },
  header:{
    backgroundColor:colors.defaultRed,
    flexDirection:'row',
    justifyContent:'space-between',
    height:50,
    marginTop:20,
  },
});

export default ConsultantList;