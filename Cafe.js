import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const pratos = [
  {
    nome: 'Overnight Oats',
    imagem: { uri: 'https://i.pinimg.com/736x/9f/98/0c/9f980cc49be43c6c6d9dcf905cc0cc9c.jpg' },
  },
  {
    nome: 'Omelete com vegetais',
    imagem: { uri: 'https://i.pinimg.com/736x/8a/9e/20/8a9e20bf24d69a9583b830f8533ca5ec.jpg' },
  },
  {
    nome: 'Torrada integral com Abacate',
    imagem: { uri: 'https://i.pinimg.com/736x/f8/f7/9f/f8f79feccd80f83a5e406b104664d01f.jpg' },
  },
  {
    nome: 'Panqueca de Banana',
    imagem: { uri: 'https://i.pinimg.com/736x/e4/9a/13/e49a13b8090a36f197b36739df93c260.jpg' },
  },
  {
    nome: 'Pão de Queijo de Frigideira',
    imagem: { uri: 'https://i.pinimg.com/736x/63/ee/cf/63eecf652660a9d38cf9eb10fafdd8f4.jpg' },
  },
];

export default function Cafe({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>CAFÉ DA MANHÃ</Text>
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