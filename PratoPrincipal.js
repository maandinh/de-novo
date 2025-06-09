import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const pratos = [
  {
    nome: 'Frango com Legumes e Arroz integral',
    imagem: { uri: 'https://i.pinimg.com/736x/7c/1a/d9/7c1ad932b56bf0327f0f928612747432.jpg' },
  },
  {
    nome: 'Salmão com Batata-doce e Brócolis',
    imagem: { uri: 'https://i.pinimg.com/736x/3b/22/79/3b22797122728e073e0dac6f4182c9ee.jpg' },
  },
  {
    nome: 'Macarrão integral com legumes e frango',
    imagem: { uri: 'https://i.pinimg.com/736x/c4/a5/1d/c4a51de04302cf89d28e4d85545e7717.jpg' },
  },
  {
    nome: 'Panqueca de Espinafre com Ricota',
    imagem: { uri: 'https://i.pinimg.com/736x/ea/2c/e6/ea2ce643292a1cc767694a24cc3991f1.jpg' },
  },
  {
    nome: 'Omelete de forno com Legumes',
    imagem: { uri: 'https://i.pinimg.com/736x/02/0a/6a/020a6a47ac63afc17d55bd08d93ebc6d.jpg' },
  },
];

export default function PratoPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>PRATO PRINCIPAL</Text>
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