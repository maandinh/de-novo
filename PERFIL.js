import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Perfil</Text>

      <TouchableOpacity
        style={styles.botaoEditar}
        onPress={() => navigation.navigate('EDICAO')}
      >
        <Feather name="edit" size={20} color="#ffffff" />
        <Text style={styles.textoBotao}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E1D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  botaoEditar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A4847',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Alice',
    fontWeight: 'bold',
  },
});
