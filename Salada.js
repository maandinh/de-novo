import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const pratos = [
  {
    nome: 'Salada Verde com Ovo  e Abacate',
    imagem: { uri: 'https://i.pinimg.com/736x/e3/96/dd/e396dda14a0c74d95a934133e739650d.jpg' },
  },
  {
    nome: 'Salada Caprese',
    imagem: { uri: 'https://i.pinimg.com/736x/b9/67/f4/b967f4b9f3cc5dd01120fe604156cc48.jpg' },
  },
  {
    nome: 'Salada de Pepino Agridoce',
    imagem: { uri: 'https://i.pinimg.com/736x/52/ac/fa/52acfa1afa08c08c716508bde07430d1.jpg' },
  },
  {
    nome: 'Salada Caesar',
    imagem: { uri: 'https://i.pinimg.com/736x/07/b3/fa/07b3fa5f80454a92f323140a4504ad23.jpg' },
  },
  {
    nome: 'Salada de Repolho com  Iogurte',
    imagem: { uri: 'https://i.pinimg.com/736x/73/8c/49/738c49473627fade0663f4a818202114.jpg' },
  },
];

export default function Salada({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>SALADA</Text>
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