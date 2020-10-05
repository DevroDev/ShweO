import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,ScrollView,TouchableOpacity,FlatList } from 'react-native';
import {Feather,Entypo,Ionicons,FontAwesome5} from '@expo/vector-icons'
import {colors} from '../assets/style';
const Post=({navigation})=> {

const profileImage={
  uri:"http://nonplusmyanmar.com/labeled_images/Pyae%20Htet%20Shein/IMG_3167.jpg"
};

const image={
  uri:'https://www.solacetech.com.sg/wp-content/uploads/2018/04/react.jpg'
};
const [gallery,setgallery]=useState([
  {image:{uri:'https://img-a.udemycdn.com/course/750x422/1589310_8f97.jpg'},title:'CS6',key:'1'},
  {image:{uri:'https://img-a.udemycdn.com/course/750x422/1589310_8f97.jpg'},title:'Components',key:'2'},
  {image:{uri:'https://img-a.udemycdn.com/course/750x422/1589310_8f97.jpg'},title:'Navigation',key:'3'},
  {image:{uri:'https://img-a.udemycdn.com/course/750x422/1589310_8f97.jpg'},title:'Router',key:'4'},

]);

  return (
    <ScrollView style={{backgroundColor:'#dbdbdb'}}>
    <View style={styles.container}>
      <ImageBackground
      source={image}
      style={styles.image} 
      imageStyle={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <Text style={styles.Tagline}>React Native Course</Text>
        <Text style={styles.Placename}>Learn React Native course at 85% off discount</Text>

        <TouchableOpacity style={{position:'absolute',left:20,top:40,backgroundColor:colors.defaultRed,
        padding:10,borderRadius:40}} onPress={()=>navigation.navigate('Home')}>
          <Feather name='arrow-left' size={22} color='white'/>
        </TouchableOpacity>

        <TouchableOpacity style={{position:'absolute',right:20,top:40,
        backgroundColor:colors.defaultRed,padding:10,borderRadius:40}}>
          <Feather name='heart' size={22} color='white'/>
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.EnrollBtn}
      onPress={()=>navigation.navigate("Pay")}>
        <Text style={styles.EnrollText}>Enroll Course</Text>
      </TouchableOpacity>
      <View style={styles.PriceBtn}>
        <Text style={styles.EnrollText}>MMK 25500</Text>
      </View>

        <View style={styles.textContainer}>
          <Text style={{padding:14,fontSize:20,fontWeight:'bold'}}>
            What is React Native
          </Text>
          <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:'normal',
          opacity:0.3,justifyContent: 'flex-start',textAlign:'justify',lineHeight:26}}>
         React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. An incomplete port for Qt also exists.
          </Text>
          <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:'normal',
          opacity:0.3,justifyContent: 'flex-start',textAlign:'justify',lineHeight:26}}>
          React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. ... React Native also exposes JavaScript interfaces for platform APIs, so your React Native apps can access platform features like the phone camera, or the user's location
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.gsTitle}>This Course Include</Text>

          <View style={styles.descsContainer}>

            <View style={styles.descContainer}>
              <View style={styles.description}>
                <FontAwesome5 name="dollar-sign" size={24} color={colors.defaultRed} />
              </View>
              <Text style={styles.descName}>MMK 25000</Text>
            </View>

            <View style={styles.descContainer}>
              <View style={styles.description}>
                <Feather name="video" size={24} color={colors.defaultRed} />
              </View>
              <Text style={styles.descName}>30 Videos</Text>
            </View>
            
            <View style={styles.descContainer}>
              <View style={styles.description}>
                <FontAwesome5 name="calendar-alt" size={24} color={colors.defaultRed} />
              </View>
              <Text style={styles.descName}>3 months</Text>
            </View>

            <View style={styles.descContainer}>
              <View style={styles.description}>
                <Feather name="award" size={24} color={colors.defaultRed} />
              </View>
              <Text style={styles.descName}>Professional Certificate</Text>
            </View>

            <View style={styles.descContainer}>
              <View style={styles.description}>
                <FontAwesome5 name="chalkboard-teacher" size={24} color={colors.defaultRed} />
              </View>
              <Text style={styles.descName}>Live Sessions</Text>
            </View>

            <View style={styles.descContainer}>
              <View style={styles.description}>
                <Feather name="globe" size={24} color={colors.defaultRed} />
              </View>
              <Text style={styles.descName}>Access to Forum</Text>
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={{fontSize:20,padding:14}}>What Will you Learn</Text>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>ES 6</Text>
          </View>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>React Component</Text>
          </View>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>React Navigation</Text>
          </View>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>React Router</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={{padding:14,fontSize:20,fontWeight:'bold'}}>
            About the course
          </Text>
          <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:'normal',
          opacity:0.3,justifyContent: 'flex-start',textAlign:'justify',lineHeight:26}}>
          Globally, there are more than 2 billion monthly active users, surpassing China’s entire population. In Singapore alone, there are over 4 million Facebook users and this is expected to reach 4.5 million in 2023. 
          </Text>
          <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:'normal',
          opacity:0.3,justifyContent: 'flex-start',textAlign:'justify',lineHeight:26}}>
          – Statista
          According to Asiaone, Singaporeans are leading first place in terms of spending the longest time on Facebook, with a record average of 38 minutes and 46 seconds per session. Of this statistic, Singaporean mums spend the most time on Facebook than any other demographic group.

          Understanding the local and international trends on Facebook translates to the need for brands to enhance their presence on this giant social network.

          This 2-day intensive Facebook Advertising Core Competencies cours
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={{fontSize:20,padding:14}}>Requirements</Text>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>Computer</Text>
          </View>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>Javascript Knowledge</Text>
          </View>
          <View style={styles.descText}>
            <FontAwesome5 name="check-square" size={22} color={'green'} style={{paddingHorizontal:10}}/>
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:10,alignSelf:'center'}}>Note Book</Text>
          </View>
        </View>

      <View style={styles.textContainer}>
        <Text  style={{fontSize:20,padding:14}}>Course by Pyae Htet Shein</Text>
        <View style={styles.profileContainer}>
          <Image source={profileImage} style={styles.profileImage}/>
          <View>
          <View style={styles.profileText}>
            <FontAwesome5 name="user" size={22} color={colors.textGray} style={{paddingHorizontal:10}} />
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:3,alignSelf:'center'}}>2650 Students</Text>
          </View>
          <View style={styles.profileText}>
            <FontAwesome5 name="react" size={22} color={colors.textGray} style={{paddingHorizontal:10}} />
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:3,alignSelf:'center'}}>3 Courses</Text>
          </View>
          <View style={styles.profileText}>
            <FontAwesome5 name="star" size={22} color={colors.textGray} style={{paddingHorizontal:10}} />
            <Text style={{fontSize:17,color:colors.textGray,paddingLeft:3,alignSelf:'center'}}>4.8 User Rating</Text>
          </View>
          </View>
        </View>
        <Text style={{fontSize:16,color:colors.textGray,textAlign:'center',paddingTop:12}}>View Profile</Text>
      </View>

        <View style={styles.textContainer}>
          <Text style={{fontSize:20,padding:14}}>Course Outline</Text>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 1</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>ES 6</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
            <Text style={{fontSize:12,color:'green',textDecorationLine:"underline line-through",position:'absolute',right:10}}>Preview</Text>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 2</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>Introduction React</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 3</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>Introduction React</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 4</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>React Native Component</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 5</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>Expo</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 6</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>Navigation</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 7</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>Router</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 8</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>UI/UX</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
          <View style={styles.descText}>
            <Text style={{paddingHorizontal:10,fontSize:17,color:colors.textGray}}>Lesson 9</Text>
            <View style={{paddingLeft:10}}>
              <Text style={{fontSize:17,color:colors.textGray}}>Final Proect</Text>
              <Text style={{fontSize:13,color:colors.textGray}}>Length - 1 hours 16 mins </Text>
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.bottomButtom}>
            <View>
            <Text style={{fontSize:24,color:colors.textGray,paddingHorizontal:10}}>MMK 25500</Text>
            <Text style={{fontSize:24,color:colors.textGray,paddingHorizontal:10,textDecorationLine:'underline line-through'}}>MMK 300000</Text>
            </View>
            <Text style={{padding:20,fontSize:20,marginLeft:30,backgroundColor:colors.defaultRed,alignSelf:'center',color:'white'}}>Enroll Now</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image:{
    height:280,
    justifyContent:'flex-end',
  },

  Tagline:{
    color:colors.headerColor,
    fontSize:16,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginVertical:6
  },
  Placename:{
    color:colors.headerColor,
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginBottom:30
  },
  EnrollText:{
    color:'white',
    fontSize:14
  },
  PriceBtn:{
    position:'absolute',
    left:12,
    top:250,
    backgroundColor:colors.defaultRed,
    padding:16,
    borderRadius:30,
    elevation:5
  },
  EnrollBtn:{
    position:'absolute',
    right:12,
    top:250,
    backgroundColor:colors.defaultRed,
    padding:16,
    borderRadius:30,
    elevation:5
  },
  darkOverlay:{
    width:150,
    height:150,
    position:'absolute',
    backgroundColor:'#000',
    opacity:0.3,
    top:0,
    left:0,
    bottom:0,
    right:0,
    borderRadius:10,
    marginHorizontal:10
  },
  textContainer:{
    backgroundColor:'white',
    margin:5,
    paddingVertical:10
  },
  descsContainer:{
    marginTop:16,
    marginHorizontal:16,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  descContainer:{
    alignItems:'center',
    width:95,
    marginVertical:12,
  },
  description:{
    width:60,
    height:60,
    borderRadius:60/2,
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center'
  },
  descName:{
    color:'white',
    fontSize:12,
    fontWeight:"600",
    marginTop:6,
    textAlign:'center'
  },
  sectionContainer:{
    paddingVertical:24,
    paddingHorizontal:32,
    margin:5,
    marginTop:10,
    backgroundColor:'#292929',
  },
  gsTitle:{
    fontWeight:'700',
    color:'white',
    fontSize:24,
    textAlign:'center'
  },
  descText:{
    flexDirection:'row',
    paddingHorizontal:8,
    paddingBottom:5,
    paddingVertical:5
  },
  profileContainer:{
    flexDirection:'row',
  },
  profileImage:{
    width:100,
    height:100,
    marginHorizontal:10
  },
  profileText:{
    flexDirection:'row',
    marginVertical:5
  },
  bottomButtom:{
    flexDirection:'row'
  }
});

export default Post;