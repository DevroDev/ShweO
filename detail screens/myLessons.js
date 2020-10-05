import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import {colors} from '../assets/style';
import {Ionicons,Feather} from '@expo/vector-icons';

const Lessons=({navigation})=>{

const profileImage={
    uri:"http://nonplusmyanmar.com/labeled_images/Pyae%20Htet%20Shein/IMG_3167.jpg"
}

const image={
    uri:'https://img-a.udemycdn.com/course/750x422/1436092_2024_4.jpg'
}

const [lessons,setgallery]=useState([
  {image:{uri:'https://www.solacetech.com.sg/wp-content/uploads/2018/04/react.jpg'},title:'Introduction to React Native',episode:'1',key:'1',length:'58 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://miro.medium.com/max/640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg'},title:'Introduction to ES6',episode:'2',key:'2',length:'30 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'},title:'Working with React js',episode:'3',key:'3',length:'56 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://miro.medium.com/max/1200/1*IDbZfpQ5pi_ZwWxYJd3XEw.png'},title:'Props and State',episode:'4',key:'4',length:'34 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://soshace-12d3e.kxcdn.com/wp-content/uploads/2019/10/JSX-vs-HTML.jpg'},title:'JSX and View',episode:'5',key:'5',length:'65 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://www.brid.tv/wp-content/uploads/2020/01/React_icon.jpg'},title:'React Native Component',episode:'6',key:'6',length:'34 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/30/bf/37/30bf3750-cc30-fec8-eafb-67061153a0c8/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/1200x630wa.png'},title:'Expo component',episode:'7',key:'7',length:'74 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://miro.medium.com/max/2800/1*OVxQLX_4Zr78m9YRW-FLqg.jpeg'},title:'React Navigation',episode:'8',key:'8',length:'53 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://static.frontendmasters.com/assets/courses/2017-03-31-firebase-react/thumb.jpg'},title:'Working with Firebase',episode:'9',key:'9',length:'75 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://reactnativeexample.com/content/images/2017/09/20170907225206.jpg'},title:'Mini movie app with React Native',episode:'10',key:'10',length:'56 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://i.pinimg.com/originals/2f/86/89/2f868980ffe2138cd1d2d1eac14ac9a4.jpg'},title:'Deploying app and upload on appstore',episode:'11',key:'11',length:'97 mins',
desc:'React Native is an open-source mobile application framework'
},
  {image:{uri:'https://nearlearn.com/public/images/react-native-course-training-in-bangalore.jpg'},title:'Final Project',episode:'12',key:'12',length:'86 mins',
desc:'React Native is an open-source mobile application framework'
},
]);

    return(

      <View style={styles.container}>
          <View style={styles.header}>
              <View style={{flex:1,paddingTop:12,paddingLeft:15}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="md-arrow-back" size={24} color="#d8d9d8"></Ionicons>
              </TouchableOpacity>
              </View>
              <View style={{flex:1.5,alignContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',alignSelf:'center',paddingTop:12,fontSize:22,fontWeight:'900'}}>React Native</Text>
              </View>
              <View style={{flex:1}}><Ionicons name='ios-search' color={'white'} size={30} style={{position:'absolute',right:12,paddingTop:12}} /></View>
          </View>
          <ScrollView>
                <View>
                  <ImageBackground source={{uri:'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png'}}
                  style={{width:'100%',height:200}}
                  />
                  <Feather name="heart" size={25} color={colors.headerColor} style={{position:'absolute',bottom:15,left:20}}/>
                  <Ionicons name="ios-options" size={25} color={colors.headerColor} style={{position:'absolute',bottom:15,left:60}}/>
                  <Ionicons name="ios-notifications" size={25} color={colors.headerColor} style={{position:'absolute',bottom:15,left:100}}/>
                </View>
                <View style={{marginVertical:10}}>
                  <Text style={{fontSize:14,color:colors.textGray,paddingLeft:15,paddingTop:10,fontWeight:'800'}}>Mobile app development with React Native</Text>
                  <Text style={{fontSize:14,color:colors.textGray,paddingLeft:15}}>By Pyae Htet Shein</Text>
                  <View style={{flexDirection:'row',paddingLeft:15,paddingTop:5}}>
                    <Ionicons name="ios-play-circle" size={45} color={colors.defaultRed} />
                    <Text style={{fontSize:18,alignSelf:'center',paddingLeft:10,color:colors.defaultRed}}>Resume Course</Text>
                  </View>
                </View>

                <View style={{marginBottom:20}}>
                  <Text style={{fontSize:18,paddingLeft:15}}>Lessons</Text>
                  <View style={{borderBottomColor:colors.textGray,borderBottomWidth:0.5,paddingTop:10}}></View>
                  <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
                    <Text style={{fontSize:18,color:colors.textGray,paddingLeft:15,alignSelf:'center'}}>Beginner</Text>
                    <Text style={{fontSize:15,color:'white',paddingVertical:10,paddingHorizontal:20,marginRight:15,borderRadius:20,backgroundColor:colors.defaultRed}}>Lessons 1-12</Text>
                  </View>
                </View>

                <View>
                  <FlatList
                  data={lessons}
                  renderItem={({item})=>{
                    return(
                      <View style={{marginVertical:10,marginLeft:10,flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('ReactVideo')}>
                          <Image source={item.image} style={{width:120,height:120,borderWidth:1,borderColor:colors.textGray}}></Image>
                          <Ionicons name="ios-play-circle" size={45} style={{position:'absolute',top:2,left:5}} color={'red'} />
                          <Text style={{position:'absolute',color:'white',paddingVertical:5,paddingHorizontal:20,backgroundColor:'red',bottom:5,right:0}}>Lesson  {item.episode}</Text>
                        </TouchableOpacity>
                          <View style={{paddingLeft:15,width:240,paddingVertical:5,alignSelf:'center'}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                            <Text style={{fontSize:13,color:colors.textGray}}>{item.desc}</Text>
                            <Text style={{color:colors.defaultRed,fontSize:14,paddingTop:5}}>Length: {item.length}</Text>
                          </View>
                          <View style={{position:'absolute',right:10,bottom:10}}>
                          <TouchableOpacity>
                            <Ionicons name="ios-download" color={colors.defaultRed} size={30}/>
                          </TouchableOpacity>
                          </View>
                      </View>
                    )}
                  }
                  />
                </View>
          </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    backgroundColor:colors.defaultRed,
    flexDirection:'row',
    height:50,
    marginTop:20,
    borderBottomColor:'black',
    borderBottomWidth:1
  },
    imageBackground:{
        height:280,
        justifyContent:'flex-end',
    },
    imageContainer:{
        margin:5,      
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        elevation: 5
    },
    image:{
        width:180,
        height:180,
        margin:10,
        borderRadius:90,
        borderColor:'red',
        borderWidth:3,
        
    },
    textContainer:{
        marginLeft:5,
        width:'45%',
        marginTop:10
    }
})

export default Lessons;