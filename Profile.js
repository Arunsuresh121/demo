import React, { Component } from 'react';
import { Text, TextInput, View,Button ,Image,ScrollView} from 'react-native';


export default class Profile extends Component {

 render() { 
  return (
    <View style={{flex:1}}>
      <View style={{flex:2.5,alignItems:'center',justifyContent:'center'}}>
        <View style={{alignItems:'center',justifyContent:'center',height:150,width:150,borderRadius:100}}>
        <Image style={{width:'100%',height:'100%'}}  source={require('./assets/pro.png')}></Image>
        </View>
      </View>
       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{ fontSize: 37,fontWeight:'bold'}}>
          Jane
        </Text> 
        </View>
        <View style={{flex:.5,alignItems:'center'}}>
        <Text style={{ fontSize: 15,fontWeight:'bold'}}>
            SAN FRANCISCO, CA
        </Text> 
        </View>  
      <View style={{flex:1,paddingLeft:20,paddingRight:20,alignContent:'center'}}>
        <View style={{borderWidth:2}}>
            <Button
                title="FOLLOW JANE"
                color="black"
                />
          </View>
        </View>
        <View style={{flex:1,paddingLeft:20,paddingRight:20,alignContent:'center'}}>
          <View style={{borderWidth:2}}>
            <Button
                title="MESSAGE"
                color="black"
                onPress={() =>
                  this.props.navigation.navigate('Chat', { name: 'Chat' })
                }
                />
           </View>
          </View>
          
          <View style={{flex:3,flexDirection:'row'}}>
            <View style={{flex:1,padding:10}}>
            <Image style={{width:'100%',height:'100%'}}  source={require('./assets/img1.png')}></Image>
            </View>
            <View style={{flex:1,padding:10}}>
            <Image style={{width:'100%',height:'100%'}}  source={require('./assets/img.png')}></Image>
            </View>
          </View>

          <View style={{flex:.4,alignItems:'center',justifyContent:'center',borderTopWidth:2,borderTopColor:'grey',}}>
          <Image style={{width:'100%'}}  source={require('./assets/tab1.png')}></Image>
          </View>
             
    </View>
   );
  }
}
