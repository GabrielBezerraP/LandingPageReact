import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import imageBkG from './assets/backgroundImage.jpg'
import perfilImage from './assets/perfilImage.jpg'

export default function App() {

  return (
    <View style={estilo.container}>
      <View style={estilo.container2}>
          <ImageBackground style ={estilo.imgFundo} source={ imageBkG }/>
          <Image style ={estilo.imgPerfil} source={perfilImage}/>
          <Text style={estilo.nome}> Gabriel B. Pereira</Text>
          <Text style={estilo.texto}> Desenvolvedor Junior .Net | C# | Javascript | React Native | SQL</Text>
      </View>
      <View style={estilo.container}>
          <LinearGradient
            colors={['#5A4AEB', '#AB4AEB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={estilo.toolbar}
          >
        <Text style={{fontSize: 25}}>Contato</Text>
        </LinearGradient>
    </View>
      <View  style={estilo.containerButton}>
        
          <TouchableOpacity style={estilo.button}>
              <Icon name="linkedin-square" size={30} color="#0077B5" />

          </TouchableOpacity>
          <TouchableOpacity style={estilo.button}>
            <Icon name="instagram" size={30} color="#0077B5"/> 

          </TouchableOpacity>
          <TouchableOpacity style={estilo.button}>
              <Icon name="github" size={30} color="#0077B5" />
              
          </TouchableOpacity>
        </View>
        <View style={estilo.container}>
          <LinearGradient
            colors={['#5A4AEB', '#AB4AEB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={estilo.toolbar}
          >
        <Text style={{fontSize: 25}}>Portifólios</Text>
        </LinearGradient>
    </View>
      </View>
    
  );
}


const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  container2: {
    justifyContent: 'center',
  },

  imgPerfil: {
    borderRadius: 75,
    width: 200,
    height: 200, 
    margin: 100,
  },
  imgFundo: {
    flex: 1,
    resizeMode: 'cover',
    height: 250
  },

  nome: {
    margin: 10,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  
  texto: {
    margin: 10,
    padding: 10,
    fontSize: 25,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },

  
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },

  toolbar: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
