import React ,{useState,useEffect}from 'react'
import { StyleSheet,Button, Text,Alert, View,ImageBackground,TouchableOpacity,Image } from 'react-native';
import {useHistory} from 'react-router-native'
import Slider from "react-native-sliders";
const image = require('../images/photo1.jpg')
const icon = require('../images/icon1.png')
const icon2 = require('../images/icon2.png')
const icon3 = require('../images/icon3.png')
const icon4 = require('../images/icon4.png')
const icon5 = require('../images/icon6.png')

export default function Sumulation (props) {
    const [mt,setMt] = useState(4000)
    const [mois,setMois] = useState(12)
    const [mensu,setMensu] = useState(2463)
    const [interetGlobale,setInteretGlobale] = useState(0)
    const [interetParMois,setInteretParMois] = useState(0)
    const [fraisDossier, setFraisDossier] = useState(0)
    const [Simulation, setSimulation] = useState("none")
    const [Simulationdetail ,setSimulationdetail] = useState("flex")


    const userInfo = props.location.state.userObj;
    const creditInfo = {
        amount: mt,
        duration: mois,
        interetGlobale: interetGlobale,
        interetParMois: interetParMois,
        fraisDossier: fraisDossier,
        mensu: mensu,
        userId: userInfo.userId,
        email: userInfo.email,
        phone: userInfo.phone,
        fname: userInfo.fname,
        lname: userInfo.lname
      };
    

    const [SimulationdetailBack ,setSimulationdetailBack] = useState("rgba(255, 255, 255, 0.7)")
    // const [mensu,setMensu] = useState(0)
    const history = useHistory()
    function calcAmortissment(mt,mois){
        mois = mois.value
        mt = mt.value
        const a = parseFloat(mt/mois)
        const frais = parseFloat((((0.71*mois)*50)/mois).toFixed(2))
        setFraisDossier(frais)
        var interGloble = parseFloat(((mt*mois*20)/1200).toFixed(2))
        setInteretGlobale(interGloble)
        var iParMois = parseFloat((interGloble/mois).toFixed(2))
        setInteretParMois(iParMois)
        var Amortissement = parseFloat((a + iParMois + frais).toFixed(2))
        setMensu(Amortissement)
    }

    
    

    function showsimulateur() {
        setSimulationdetail("flex")
        setSimulation("none")
       
        setSimulationdetailBack("rgba(255, 255, 255, 0.7)")

    }
 
    function showdetail() {
        setSimulation("flex")
        setSimulationdetail("none")
        setSimulationdetailBack("rgba(0, 0, 0, 0.7)")
       
    }

    return (
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} >
        
    
        <View style={{ backgroundColor: SimulationdetailBack,flex: 0.5,marginTop: 'auto',padding:0}}>
        <View style={styles.buttonHolder}>

                    {/* <Button style={styles.button}
        title="Press me 1 "
        onPress={() => Alert.alert('Simple')}
        /> */}
        <TouchableOpacity  onPress={() => showsimulateur()} style={styles.button}>
           
            <Text style={{color: '#330073', fontWeight:'bold'}}>Détail de la simulation </Text>
            <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 18}}>Crédit personnel</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => showdetail()} style={styles.button2}>
            <Text style={{color: '#FFFFFF', fontWeight:'bold'}}>Simulateur </Text>
            <Text style={{color: '#FFFFFF', fontWeight:'bold', fontSize: 18}}>Crédit personnel</Text>
        </TouchableOpacity>
        {/* <Button style={styles.button}
        title="Press me 2 "
        onPress={() => Alert.alert('Simple')}
        /> */}
        </View>
          <View  style={styles.slider}>
              <View style={{display: Simulation}}>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Montant du credit</Text>
            
            <Slider
               minimumValue={4000}
               maximumValue={500000}
               onValueChange={value => {
                //    console.log(value);
                    value = parseFloat(value[0].toFixed(0))
                    setMt({ value })
                    calcAmortissment(mt,mois)
                }}
            />
            <Text style={{color: '#FFFFFF', fontWeight:'bold', fontSize: 18}}>{mt.value} DHS</Text>
            
            
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Duree du credit</Text>
            <Slider
               minimumValue={12}
               maximumValue={84}
               onValueChange={value => {
                    value = parseInt(value[0].toFixed(0))
                    setMois({ value })
                    calcAmortissment(mt,mois)     
                }}
            />
            <Text style={{color: '#FFFFFF', fontWeight:'bold', fontSize: 18}}>{mois.value} mois</Text>
            </View>
            
            <View style={{ display : Simulationdetail,flexDirection:'column'}}>

            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row', padding:4, alignItems:'center',height: 60,width:200}}>
            
            <Image source={icon} style={{ height: 35,width:35}}></Image>
             
             <View style={{ marginLeft:10}}>
                <Text style={{color: '#330073',fontSize: 13}}>Montant du crédit</Text>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 14}}>{mt.value} DHS</Text>
            </View>
            </View>

            <View style={{flexDirection:'row', padding:4, alignItems:'center',height: 60,width:200}}>
            
                <Image source={icon2} style={{ height: 35,width:35}}></Image>
             
             <View style={{ marginLeft:10}}>
                <Text style={{color: '#330073',fontSize: 13}}>Durée du crédit</Text>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 14}}>{mois.value} MOIS</Text>
            </View>
            </View>
            
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row', padding:4, alignItems:'center',height: 60,width:200}}>
            
                <Image source={icon3} style={{ height: 35,width:35}}></Image>
             
             <View style={{ marginLeft:10}}>
                <Text style={{color: '#330073',fontSize: 13}}>Assurance mensuelle</Text>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 14}}>7.1 DHS</Text>
            </View>
            </View>

            <View style={{flexDirection:'row', padding:4, alignItems:'center',height: 60,width:200}}>
            
                <Image source={icon4} style={{ height: 35,width:35}}></Image>
             
             <View style={{ marginLeft:10}}>
                <Text style={{color: '#330073',fontSize: 13}}>Frais de dossier</Text>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 14}}>{fraisDossier ? fraisDossier : ''} DHS</Text>
            </View>
            </View>
            
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row', padding:4, alignItems:'center',height: 60,width:200}}>
            
                <Image source={icon2} style={{ height: 35,width:35}}></Image>
             
             <View style={{ marginLeft:10}}>
                <Text style={{color: '#330073',fontSize: 13}}>Intérêt par mois</Text>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 14}}>{interetParMois ? interetParMois : ''} DHS</Text>
            </View>
            </View>

            <View style={{flexDirection:'row', padding:4, alignItems:'center',height: 60,width:200}}>
            
                <Image source={icon} style={{ height: 35,width:35}}></Image>
             
             <View style={{ marginLeft:10}}>
                <Text style={{color: '#330073',fontSize: 13}}>Coût global du</Text>
                <Text style={{color: '#330073',fontSize: 13}}> crédit</Text>
                <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 14}}>{interetGlobale ? interetGlobale : ''} DHS</Text>
            </View>
            </View>
            
            </View>

            <View style={{ backgroundColor: "#FFFFFF",flexDirection:'row', padding:4, alignItems:'center',height: 70,width:'100%', justifyContent:'center'}}>
            
                    <Image source={icon} style={{ height: 35,width:35}}></Image>
                
                <View style={{ marginLeft:10}}>
                    <Text style={{color: '#330073',fontSize: 15}}>Mensualité du crédit</Text>
                    <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 18}}> {mensu ? mensu : ''} DHS</Text>
                </View>
            </View>
             
         <View style={{ alignItems:'center',width:'100%', marginTop:'-3%'}}>
        <TouchableOpacity style={styles.btnLogin}>
         <Text style={styles.text} onPress={() => { 
             history.push({
            pathname: "/info",
            state: {
                creditInfo,
            },
            }); 
        }}>Demander ce prêt </Text>
     </TouchableOpacity>
     </View>
            {/* <Button title='reservation' onPress={() => { history.push("/reservation"); }} /> */}

            </View>
            </View >
            </View>
            </ImageBackground>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            
            
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        text: {
            color: "white",
            fontSize:14,
           
            textAlign: "center",
           
        },
        // similationHolder : {
            
            
        // },
        buttonHolder: {
           
            width : "100%",
            display : "flex",
            flexDirection : "row",
           
        },

        button:{
           
            padding:13,
            
            backgroundColor: "#FFFFFF",
            height:70,
            width : 210     
           },

           button2:{
            backgroundColor: "#000000",
            padding:13,
            height:70,
            width : 210     
           },
            
           btnLogin:{
            alignItems:'center',
            width:  300,
            height: 44,
            borderRadius: 25,
            backgroundColor:'rgb(179, 16, 25)',
            justifyContent: 'center',
            marginVertical: 20,
    
            },

           detailsimulation: {
            display:'none'
           },
           
       
    });
