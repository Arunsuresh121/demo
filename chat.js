import React, { Component } from 'react';
import { Text, TextInput, View,Button,Image,TouchableOpacity} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';


export default class Chat extends Component {

 render() { 
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
     
          <TouchableOpacity 
           onPress={() =>this.props.navigation.navigate('Profile', { name: 'Pofile' })}
           style={{alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'grey',}}>
           <Image style={{width:'100%'}}  source={require('./assets/tab2.png')}></Image>
          </TouchableOpacity>
          
          <View style={{flex:.3,flexDirection:'row',paddingTop:30}}>
             <View style={{flex:.1,paddingLeft:10}}>
             <Image style={{width:30,height:30}}  source={require('./assets/pp.png')}></Image>
             </View>
            <View style={{flex:1,paddingLeft:20}}>
               <ImageBackground style={{ resizeMode: "cover",paddingLeft:10,width:300,height:80,justifyContent:'center'}}  source={require('./assets/chat.png')}>
               <Text>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
               </ImageBackground>
            </View>
          </View>

          <View style={{flex:.3,flexDirection:'row',paddingTop:30}}>

            <View style={{flex:1,paddingLeft:40}}>
               <ImageBackground style={{ resizeMode: "cover",paddingLeft:10,width:300,height:80,justifyContent:'center'}}  source={require('./assets/chat.png')}>
               <Text style={{color:"#8E1DE8"}}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
               </ImageBackground>
            </View>
            <View style={{flex:.1,paddingRight:10}}>
             <Image style={{width:30,height:30}}  source={require('./assets/pp1.png')}></Image>
             </View>
          </View>

          
          <View style={{flex:1,flexDirection:'row',paddingTop:30}}>
             <View style={{flex:.1,paddingLeft:10}}>
             <Image style={{width:30,height:30}}  source={require('./assets/pp.png')}></Image>
             </View>
            <View style={{flex:1,paddingLeft:20}}>
               <ImageBackground style={{ resizeMode: "cover",width:300,height:60,justifyContent:'center',paddingLeft:10}}  source={require('./assets/chat.png')}>
               <Text style={{color:"#D82E57"}}>Thank you! That was very helpful!</Text>
               </ImageBackground>
            </View>
          </View>

        
          <View style={{alignItems:'center',justifyContent:'center',borderTopWidth:1,borderTopColor:'grey',}}>
           <Image style={{width:'100%'}}  source={require('./assets/tab1.png')}></Image>
          </View>

    </View>
   );
  }
}