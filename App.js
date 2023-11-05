import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Signo App</Text>
      <View>
        <Text style={styles.label}>Digite seu nome</Text>
        <TextInput style={styles.input} keyboardType="default" value={nome} onChange={text => setNome(text)} placeholder="Nome" />
        <Text style={styles.label}>Digite sua data de nascimento</Text>
        <TextInput style={styles.input} keyboardType="default" value={dataNascimento} onChange={text => setDataNascimento(text)} placeholder="Data de Nascimento" />
        <TouchableOpacity style={styles.btn}><Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Pesquisar o Signo</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    color: "#000",
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'left',
    marginVertical: 10,
    color: '#000',
  },
  input: {
    borderRadius: 20,
    borderStyle: 'solid',
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#F0F0F0',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#000",
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginTop: 18
  }
});
