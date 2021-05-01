import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Text, View,Dimensions,Image, ImageBackground,TextInput,Button,Alert,TouchableOpacity,CheckBox } from 'react-native';
import firebase from '../firebase/firebase'
const {width: WIDTH}= Dimensions.get('window')


const img = require('../images/photo1.jpg')
const image = require('../images/129677d.png')

export function Validate() {
  

  const [code,setCode] = useState('');
 


    const valide = async () => {
      
   console.log('test');




    
  
  }

  return (
    <ImageBackground source={img} style={styles.backgroundcontainer}  imageStyle={{opacity:0.1}} >
  
    <View  style={styles.logoContainer}>
       
    <View style={{alignItems: 'center',}}>
            <View style={{ backgroundColor:"#ee3b45", width: 95,height: 150, justifyContent: 'center',position:'relative', top:-40 }}>
                <Image source={image} style={{  resizeMode: "center", height: 70,width: 'auto',}}/>
            </View>
            <View style={{  alignItems: 'center',width: 340,paddingVertical:50}}>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 23}}>Vérification de votre identité</Text>
                <Text style={{color: '#330073',fontSize: 18}}>Vous allez recevoir un mail </Text>
            </View>
        </View>
   
   
         


        <TextInput
        style={styles.input}
        placeholder={'CODE DE VALIDATION'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setCode}
        value={code}
        /> 
        
        

        <TouchableOpacity style={styles.btnLogin}>
         <Text style={styles.text}   onPress={() => valide()}>VALIDER ET CONTINUER</Text>
     </TouchableOpacity>

     
     

     
   
    </View>
    
    </ImageBackground>

  );
}



export default Validate ;



const styles = StyleSheet.create({

 logoContainer: {
   flex:1,
 
  padding:40,
  alignItems: 'center',
  width: 500,
  marginTop:'25%'
    
    //  backgroundColor:'#ffffff',
     
  
     
      
 
},




 logoText:{
    color: '#ee3b45',
    fontSize:25,
    fontWeight:'500',
   
    marginBottom: 40,
   
    },
    input:{
        width: WIDTH - 70,
        height: 45,
        marginTop: 10,
        borderWidth: 2,
        borderColor: "#d9d9d9",
        borderRadius: 25,
        fontSize:16,
        paddingLeft: 15,
        backgroundColor:'#ffffff',
        color:'#000000',
     
        },

        inputArea:{
            width: WIDTH - 50,
          
            marginTop: 10,
            borderRadius: 25,
            fontSize:16,
            paddingLeft: 45,
            backgroundColor:'rgba(0, 0, 0, 0.35)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 25
            },
    

    

btnLogin:{

    width:  215,
    height: 55,
    borderRadius: 25,
    backgroundColor:'#ee3b45',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: "#471f51",
    shadowOffset: {
      width: 0,
      height: 5,
      color:'white',
      fontWeight:'bold'
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    
    
    },
    text:{
    
    color:'rgba(255,255,255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
    },

    sign: {
    color:'rgba(255,255,255, 0.7)',
    fontSize: 16,
   
    marginTop: 30
    },

    backgroundcontainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
     
    },

    Radiotext: {
        fontSize: 10,
    },
    check:{
        borderColor: "#d9d9d9",
        marginTop: 28,
        marginBottom: -12,
        alignItems: 'center',
        flexDirection: 'row',
        width: WIDTH - 50,
        backgroundColor:'#ffffff',
        borderRadius: 25,
        height: 55,
        padding: 5,
        borderWidth: 2


    },

    checkbox:{
     padding:10
    }
    


});

