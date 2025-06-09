import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const pratos = [
  {
    nome: 'Wrap de Frango ',
    imagem: { uri: 'https://i.pinimg.com/736x/ca/37/1d/ca371de896dbadf363c5dd06b613b4d1.jpg' },
  },
  {
    nome: 'Sanduíche de Frango com Maionese',
    imagem: { uri: 'https://i.pinimg.com/736x/8b/eb/fd/8bebfd15228c5fb71f6ae80e1477003e.jpg' },
  },
  {
    nome: 'Bruschetta de Tomate e Queijo',
    imagem: { uri: 'https://i.pinimg.com/736x/07/10/55/071055249e27852a2e9341ed25fe239d.jpg' },
  },
  {
    nome: 'Iogurte com Mel, Granola e Frutas',
    imagem: { uri: 'https://i.pinimg.com/736x/d9/24/3c/d9243ce55c21600856bd933f484ad5db.jpg' },
  },
  {
    nome: 'Abacate com Ovo e Chia',
    imagem: { uri: 'https://i.pinimg.com/736x/9f/94/3c/9f943ca67f1b99005181d293160f4d52.jpg' },
  },
];

export default function Lanche() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>LANCHE</Text>
      </View>

      <ScrollView contentContainerStyle={styles.lista}>
        {pratos.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <TouchableOpacity>
                <Text style={styles.botao}>COZINHAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C3B36',
    paddingTop: 50,
  },
  cabecalho: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  borderRadius: 10,
  paddingHorizontal: 20,
  paddingVertical: 15,
  backgroundColor: '#46685B', 
  borderBottomColor: '#ccc',
},
  titulo: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 15,
    fontFamily: 'Baskerville Old Face',
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#E1C77E',
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 25,
    fontFamily: 'Alice',
    color: '#333',
    marginBottom: 4,
  },
  botao: {
    color: '#7D5A1C',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Alice',
  },
});