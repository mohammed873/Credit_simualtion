import React, { useState , useEffect } from 'react'
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Text, View,Dimensions,Image, ImageBackground,TextInput,TouchableOpacity,CheckBox} from 'react-native';
import firebase from '../firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width: WIDTH}= Dimensions.get('window')

const img = require('../images/photo1.jpg')
const image = require('../images/id-card.png')



export function SignUp({history}) {


 

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [isChecked, setChecked] = useState(false);




  
function register() {
   
  db.collection('users').add({
       lastName:lastname,
       firstName:firstname,
       email:email,
       telephone: phoneNumber
  }).then((docRef) => {

    var userId = docRef.id
    const userObj = {
      fname: lastname,
      lname: firstname,
      phone: phoneNumber,
      email: email,
      userId: userId
    };
    // clearing inputs
    setEmail('');
    setFirstname('');
    setphoneNumber('');
    setLastname('');
    setChecked(false)
    setSelection(false)
    console.log(userObj);
    history.push({
      pathname: "/simulate",
      state: {
        userObj,
      },
    });
    })
  }
  

  return (
    <ImageBackground source={img} style={styles.backgroundcontainer} imageStyle={{opacity:0.1}}>
  
    <View  style={styles.logoContainer}>
    <View style={{flexDirection:"row",}}>
            <View style={{ backgroundColor:"#ee3b45", width: 65,height: 120, justifyContent: 'center', marginHorizontal:9 ,marginLeft:'12%'}}>
                <Image source={image} style={{  resizeMode: "center", height: 60,width: 'auto'}}/>
            </View>
            <View style={{width: 340,paddingVertical:30,}}>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 20}}>MES COORDONNÉES</Text>
                <Text style={{color: '#330073'}}>Renseigner les champs ci-dessous et passer</Text>
                <Text>à l'étape suivante !</Text>
            </View>
        </View>  
    
    <Text style={styles.logoText}></Text>  
    <TextInput
        style={styles.input}
        placeholder={'Prenom'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setFirstname}
        value={firstname}
        />
         <TextInput
        style={styles.input}
        placeholder={'Nom'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setLastname}
        value={lastname}
        />

        <TextInput
        style={styles.input}
        placeholder={'Telephone'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setphoneNumber}
        value={phoneNumber}
        />  

        <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setEmail}
        value={email}
        /> 

      <View style={styles.check} >
          <View style={styles.checkbox}>
 
          <CheckBox  value={isChecked}  onValueChange={setChecked}/>
          </View >
          <View style={{width:294}}>
        <Text  style={styles.Radiotext}>J'AI LU ET ACCEAPTÉ LES CONDITIONS GÉNÉRALES D'UTILISATION</Text>
        <Text style={styles.Radiotext}>ET LES MENTIONS LÉGALES NOTAMMENT LA MENTION RELATIVE</Text>
        <Text style={styles.Radiotext}>AUX DONNÉES À CARACTÈRE PERSONNEL</Text>
        </View>
      </View>
   
      <View style={styles.check}>
         <View style={styles.checkbox}>
          <CheckBox   value={isSelected} onValueChange={setSelection}/>
          </View>

        <View style={{width:360}}>
        <Text style={styles.Radiotext}>J'ACCEPTE DE RECEVOIR LES OFFRES PROMOTIONNELLES</Text>
        <Text style={styles.Radiotext}>D'EQDOM</Text>
        </View>
      </View>
          
      
        
        



        <TouchableOpacity style={styles.btnLogin}>
         <Text style={styles.text} onPress={() => register()}> SIMULER </Text>
     </TouchableOpacity>

     
     

     
   
    </View>
    
    </ImageBackground>

  );
}


export default SignUp ;



const styles = StyleSheet.create({

 logoContainer: {
    
   alignItems: 'center',
   width: 500,
    
},


 logoText:{
  color: '#ee3b45',
  fontSize:25,
  fontWeight:'500',
 marginBottom: 40,
   
    },
    input:{
        width: WIDTH - 50,
        height: 45,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#d9d9d9",
        borderRadius: 25,
        fontSize:16,
        paddingLeft: 25,
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

    width:  185,
    height: 55,
    borderRadius: 25,
    backgroundColor:'rgb(179, 16, 25)',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: "#471f51",
    shadowOffset: {
      width: 0,
      height: 5,
      color:'white'
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
        fontSize: 8,
        color:'#b3b3b3'
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
        borderWidth: 1


    },
    checkbox:{
     
      padding:10
     }
    


});

