import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

export default function EditarPerfil({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.titulo}>EDITAR PERFIL</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nome completo"
            placeholderTextColor="#062925"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
          <Feather name="edit-3" size={18} color="#062925" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#062925"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Feather name="edit-3" size={18} color="#062925" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Telefone"
            placeholderTextColor="#062925"
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
          />
          <Feather name="edit-3" size={18} color="#062925" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#062925"
            secureTextEntry={!mostrarSenha}
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
          <Entypo
            name={mostrarSenha ? 'eye' : 'eye-with-line'}
            size={18}
            color="#062925"
            onPress={() => setMostrarSenha(!mostrarSenha)}
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.btnSalvar}>
            <Text style={styles.textoBotao}>SALVAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.goBack()}>
            <Text style={styles.textoBotao}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001E1D',
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginBottom: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 10,
    fontFamily: 'Alice',
  },
  formBox: {
    backgroundColor: '#2A4847',
    padding: 20,
    borderRadius: 15,
    width: '85%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#062925',
    fontFamily: 'Alice',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  btnSalvar: {
    backgroundColor: '#1E2E2A',
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  btnCancelar: {
    backgroundColor: '#0C3A53',
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Alice',
    fontWeight: 'bold',
  },
});
