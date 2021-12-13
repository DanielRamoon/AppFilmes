import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, 
TextInput, TouchableOpacity, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"Venom: Let There Be Carnage",
        text: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        release: 2021,
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVxLXB4UpngxtMPNndsVI451JZ6TQSn3XejvWkUX3Bh80WKFlT          '
    },
    {
        title:"Red Notice",
        text: "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
        release: 2021,
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg'
    },
    {
        title:"Clifford the Big Red Dog",
        text: "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend.",
        release: 2020,
        img: 'https://kbimages1-a.akamaihd.net/ee92ad4a-ef43-4e0f-8296-a45e1a8ab609/1200/1200/False/clifford-the-big-red-dog-the-movie-graphic-novel.jpg'
    },
    {
        title:"The Last Duel",
        text: "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
        release: 2021,
        img: 'https://imagens.publicocdn.com/imagens.aspx/770320?tp=KM'
    },
    {
        title:"Encanto",
        text: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel",
        release: 2021,
        img: 'https://br.web.img3.acsta.net/pictures/21/09/29/18/02/2861381.jpg'
    },
    {
        title:"Shang-Chi and the Legend of the Ten Rings",
        text: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        release: 2021,
        img: 'https://lumiere-a.akamaihd.net/v1/images/image_94aa61e8.jpeg?region=0,0,540,810'
    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation=useNavigation(); 


  const _renderItem = ({ item, index }) => {
    return(
      <View>
        <TouchableOpacity>
          <Image
            source={{uri: item.img}}
            style={styles.carouselImg}
          />
           <Text style={styles.carouselText} >{item.title}</Text>
           <Icon name='play-circle-outline' size={30} color='#fff' style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>
    );
  };

 return (
   <ScrollView style={styles.container}>
     <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
          <ImageBackground
          source={{ uri: background}}
          style={styles.imgBg}
          blurRadius={8}
          >

            <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder="Procure seu Filme"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>

            <Text 
            style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
            marginLeft: 10, marginVertical: 10, }}
            >
              Lançamentos:
            </Text>

            <View style={styles.slideView}>
              <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>

           <View style={styles.moreInfo} >
              <View style={{marginTop:10, marginLeft:10, padding:10}} >
              <Text>{lista[activeIndex].title}</Text>
              <Text>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginRight: 15, marginTop: 10 }} 
              onPress={() =>alert('clicou')}
              >
                <Icon 
                name="queue" 
                color="#131313" 
                size={30} 
                />
              </TouchableOpacity>
           </View>

          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgBg:{
    flex:1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  viewSearch:{
    marginTop: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  carouselImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position:'absolute',
    top: 15,
    right: 15,
  },
  moreInfo:{
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 20,
    color: '#131313',
    fontSize: 20,
    fontWeight: 'bold'
  }
});