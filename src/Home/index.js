import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Header from '../Header/header';
import ListFilme from '../ListFilm/listFilm';


export default function Home(){
    return(
      <View style={style.container} >
         <ListFilme/>
      </View>
   )
}
          
  const style = StyleSheet.create({
     container:{
        flex:1,
        
     },
     txt:{
        fontSize:20,
        marginTop:10,
        borderBottomWidth:1,
        marginLeft:10
        
     }
  })        
      
          
      
      