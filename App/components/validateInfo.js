import React ,{useState,useEffect }from 'react'
import { StyleSheet,Button, Text,Alert, View,ImageBackground,TouchableOpacity,Image } from 'react-native';
const img = require('../images/photo1.jpg')
import firebase from '../firebase/firebase'
import { useHistory } from "react-router-native";
import SmsAndroid from 'react-native-get-sms-android';

export default function ValidateInfo (props) {
    const history = useHistory();
    const userInfo = props.location.state.userObj;
    const creditInfo = props.location.state.creditInfo;
    
    function saveCreditInfo() {
   
        db.collection('creditInfo').add({
             userId: creditInfo.userId,
             mensu: creditInfo.mensu,
             interetParMois: creditInfo.interetParMois,
             interetGlobale: creditInfo.interetGlobale,
             fraisDossier: creditInfo.fraisDossier,
             amount: creditInfo.amount.value,
             duration: creditInfo.duration.value
        }).then(() => {
           console.log('done');
          history.push("/validate");
          })
        }

    
     const sendSMS = async () => {
        const  phoneNumber =  "+212655716260"
        const message = "message"
    try {
      
      SmsAndroid.autoSend(
        phoneNumber,
        message,
        (fail) => {
          console.log('Failed with this error: ' + fail);
        },
        (success) => {
          console.log('SMS sent successfully');
        },
      );
    } catch (err) {
      // console.log(err)
    }
  };
    console.log(userInfo,creditInfo);
    return(
        <ImageBackground source={img} style={styles.backgroundcontainer} imageStyle={{opacity:0.1}}>
            <View style={{ width: '80%'}}>
               <View style={{backgroundColor:'darkblue', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>First Name</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.fname}</Text>
                </View>
                <View style={{backgroundColor:'darkblue', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Last Name</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.lname}</Text>
                </View>
                <View style={{backgroundColor:'darkblue', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Email</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.email}</Text>
                </View>
                <View style={{backgroundColor:'darkblue', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Phone Number</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.phone}</Text>
                </View>
                <View style={{backgroundColor:'black', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Credit Mensu</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.mensu}</Text>
                </View>
                <View style={{backgroundColor:'black', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Interet Par Mois</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.interetParMois}</Text>
                </View>
                <View style={{backgroundColor:'black', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Interet Globale</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.interetGlobale}DH</Text>
                </View>
                <View style={{backgroundColor:'black', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Frais de Dossier</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.fraisDossier} DH</Text>
                </View>
                <View style={{backgroundColor:'black', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Credit Amount</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.amount.value} DH</Text>
                </View>
                <View style={{backgroundColor:'black', padding:7 ,  marginTop:'1%'}}>
                   <Text style={{textAlign:'center',color:'white'}}>Credit Duration</Text> 
                   <Text style={{textAlign:'center',color:'yellow'}}>{creditInfo.duration.value} Mois</Text>
                </View>
                
                
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text} onPress={() => saveCreditInfo()}> Validate All Info </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundcontainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
       
      },
    text:{
       
        color:'rgba(255,255,255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
        },
        btnLogin:{

            width:  289,
            height: 50,
            borderRadius: 10,
            backgroundColor:'rgb(179, 16, 25)',
            justifyContent: 'center',
            marginTop: 20,
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
   });