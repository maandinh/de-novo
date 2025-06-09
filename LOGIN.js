import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function LOGIN({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false); // <-- novo estado

  const entrar = () => {
    setLoading(true); // inicia o loading

    // Simula uma chamada de login (substitua por lógica real depois)
    setTimeout(() => {
      setLoading(false); // para o loading
      navigation.navigate('Main'); // vai para a tela principal
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boasVindas}>BEM VINDO</Text>
      <Text style={styles.nomeApp}>XUXU</Text>

      <View style={styles.loginBox}>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="email"
            size={20}
            color="#062925"
            style={styles.icon}
          />
          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="#062925"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Entypo
            name={mostrarSenha ? 'eye' : 'eye-with-line'}
            size={20}
            color="#062925"
            style={styles.icon}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#062925"
            secureTextEntry={!mostrarSenha}
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.botaoEntrar} onPress={entrar}>
  <Text style={styles.textoBotao}>
    {loading ? 'Carregando...' : 'ENTRAR'}
  </Text>
</TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('REGISTRO')}>
          <Text style={styles.registrarTexto}>Não tem conta? Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


