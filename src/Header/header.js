import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableHighlight } from 'react-native';


export default function Header(){
    return(
        // Parte do Cabeçalho 
        <View   style={Style.comtainer1} >  
            <View>
            <Image
                source={require('../../assets/logo.png')}
                style={Style.logo}
            />
            </View>

                <View style={Style.container2} >
                    <Text style={Style.txt1} >Bem-Vindo(a).</Text>
                    <Text style={Style.txt2} >Milhões de Filmes, Serie e Pessoas para Descobrir.Explore já!</Text>
                    <TextInput
                        placeholder=  'Pesquise Aqui...'
                        style={Style.input}
                        />
                        <TouchableHighlight style={Style.btn} >
                            <Text style={Style.txt3} >Seach</Text>
                        </TouchableHighlight>
               </View>
                   
        </View>
          // logo a cima lista de Filmes          
                        
    )
}
const Style = StyleSheet.create({
    comtainer1:{
        alignItems:'center',
        backgroundColor:'#483D8B',
        marginTop:0
    },
    logo:{
        height:20,
        marginTop:5,
        
    },
    container2:{
        
        backgroundColor:'#000080',
        marginTop:10,
        width:'100%',
        height:150
    },
    txt1:{
        color:'#fff',
        fontSize:25,
        marginTop:10,
        marginLeft:10
    },
    txt2:{
        color:'#fff' ,
        fontSize:14,
        marginLeft:10
    },
    input:{
        
        backgroundColor:"#fff",
        color:'#000',
        width:'90%',
        marginLeft:10,
        marginTop:10,
        borderRadius:50
    },
    btn:{
        backgroundColor:'#7FFFD4',
        width:60,
        height:27,
        marginLeft:320,
        marginTop:-27,
        borderRadius:50,
        
    },
    txt3:{
        color:'#696969',
        textAlign:'center'
    }
        

        

})