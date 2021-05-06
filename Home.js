import React, { Component } from 'react';
import { Button, Text, TextInput, View ,ScrollView,ToastAndroid} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'' };
        this.validate = this.validate.bind(this)
      }

      validate = () => {
        
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
          ToastAndroid.show("Login successful...!", ToastAndroid.LONG);
           this.props.navigation.navigate('Profile', { name: 'Pofile' }) 
       }
       else{
           alert('Please ener a valid email');
       }

      }
      
   
 render() { 

  return (
    <ScrollView style={{marginHorizontal: 20,}}>

      <View style={{flex:1,paddingTop:45}}>
        <Text style={{paddingTop:10, fontSize: 35}}>
            Register
        </Text> 
      </View>
      <View style={{flex:1,paddingTop:30}}>
      <View style={{borderWidth:2}}>
        <TextInput 
          placeholder="Email address"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}>
              
          </TextInput>
      </View>
      </View>
      <View style={{flex:1,paddingTop:20}}>
      <View style={{borderWidth:2}}>
        <TextInput placeholder="Create password" secureTextEntry={true}></TextInput>
      </View>
      </View>

      <View style={{flex:1,paddingTop:20}}>
      <View style={{borderWidth:2}}>
      <Button
            title="NEXT"
            color="black"
            onPress={() =>
              this.validate()
            }
            />
      </View>
      </View>
    </ScrollView>
   );
  }
}
