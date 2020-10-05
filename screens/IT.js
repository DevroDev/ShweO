import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {colors} from '../assets/style';

const Category=({navigation})=> {

  const starColors=["#e3ab53","#e3ab53","#e3ab53","#e3ab53","#8b6f43"]

  const [category]=useState([
    {
    image:{uri:'https://img-a.udemycdn.com/course/240x135/2383526_5670_2.jpg'},
    title:'Java Course for Beginner',
    desc:'This course is Java Fundamental course ',
    instructor:'Devro',
    price:'MMK 15990',
    initialPrice:'MMK 125000',
    key:'1'
  },
    {
    image:{uri:'https://static.businessinsider.sg/2020/04/04/5e875b2373d0c837a6439875.jpeg'},
    title:'Introduction to computer Science',
    desc:'Taught by experience teacher from Technological university Mandalay ',
    instructor:'Pyae Htet Shein',
    price:'MMK 18990',
    initialPrice:'MMK 225000',
    key:'2'
  },
    {
    image:{uri:'https://img-a.udemycdn.com/course/750x422/1589310_8f97.jpg'},
    title:'Mobile app development with React Native',
    desc:'Advance Onto Various IT-related Degree Programmes.',
    instructor:'John Wick',
    price:'MMK 67990',
    initialPrice:'MMK 254000',
    key:'3'
  },
    {
    image:{uri:'https://img-a.udemycdn.com/course/480x270/1643978_a769_5.jpg'},
    title:'Learn Web Dev from zero to hero',
    desc:'Start with an IT Diploma',
    instructor:'Devil Ko',
    price:'MMK 80990',
    initialPrice:'MMK 465000',
    key:'4'
  },
    {
      image:{uri:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/04/12-2-1100x550.jpg'},
      title:'Javascript CS5 bootcamp [2020]',
      desc:'Advance Onto Various IT-related Degree Programmes.',
      instructor:'Shein Dev',
      price:'MMK 62990',
      initialPrice:'MMK 354000',
      key:'5'
    },
  {image:{uri:'https://img-a.udemycdn.com/course/750x422/1708340_7108_4.jpg'},
  title:'Learn Flutter for building mobile app UI',
  desc:'Start with an IT Diploma',
  instructor:'Devro Dev',
  price:'MMK 21990',
  initialPrice:'MMK 125000',
  key:'6'
},
  {
  image:{uri:'https://codecondo.com/wp-content/uploads/2017/05/Why-Laravel.jpg'},
  title:'Laravel Course for absolute beginner',
  desc:'Advance Onto Various IT-related Degree Programmes.',
  instructor:'Saker',
  price:'MMK 11990',
  initialPrice:'MMK 150000',
  key:'7'
},
  {
  image:{uri:'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nlMKa4JeSBysXoj7pa90'},
  title:'Learn Nodejs fro server side scripting',
  desc:'Start with an IT Diploma',
  instructor:'Kiwi',
  price:'MMK 19990',
  initialPrice:'MMK 245000',
  key:'8'
},
  ]);

  return (
      <View style={styles.container}>

        <View style={{paddingVertical:20,backgroundColor:colors.defaultRed}}>
          <TextInput style={styles.searchBox} placeholder='Search Course' placeholderTextColor='#666'></TextInput>
              <Feather name='search' size={22} color='#666' 
              style={{position:'absolute',top:50,right:60,opacity:0.6}}/>
        </View>

          <FlatList
          data={category}
          renderItem={({item})=>{
            return(
              <TouchableOpacity
              onPress={()=>navigation.navigate('Post')}>
                <View style={styles.cateContainer}>
                  <Image
                  source={item.image}
                  style={{width:60,height:60,marginVertical:10,marginLeft:5}}
                  />
                  <View style={{paddingLeft:20,marginVertical:10,width:'75%'}}>
                    <View>
                      <Text style={{fontSize:17}}>{item.title}</Text>
                      <Text style={{fontSize:15,color:colors.textGray,paddingVertical:2}}>{item.instructor}</Text>
                      <Text style={{textAlign:'left',color:colors.textGray}}>
                        {item.desc}
                      </Text>
                      <View style={{flexDirection:'row',paddingVertical:5}}>
                        {starColors.map((color,index)=>{
                          return(
                            <Feather name="star" size={14} color={color} key={index} style={{marginRight:4}} />
                          )
                        })}
                        <Text style={{fontSize:14,fontWeight:'bold',paddingLeft:20,color:colors.textGray}}>4 (55,400)</Text>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{}}>{item.price}</Text>
                        <Text style={{color:colors.textGray,paddingLeft:20,textDecorationLine:'line-through'}}>
                          {item.initialPrice}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}}
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer:{
    paddingTop:100,
    paddingLeft:16
  },
  setTitle:{
    fontSize:38,
    fontWeight:'bold',
    color:colors.defaultRed
  },
  setTitleText:{
    fontSize:16,
    fontWeight:'normal',
    color:colors.defaultRed
  },
  
  searchBox:{
    marginTop:16,
    backgroundColor:'#fff',
    paddingLeft:24,
    padding:12,
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    width:'90%'
  },
  cateContainer:{
    backgroundColor:'white',
    flexDirection:'row',
    borderBottomColor:colors.textGray,
    borderBottomWidth:0.5,
    marginHorizontal:10
  }
});

export default Category;