import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleDateChange = (input) => {
    const dateArray = input.split('/');
    const day = parseInt(dateArray[0], 10);
    const month = parseInt(dateArray[1], 10);

    if ((day > 0 && day <= 31) && (month > 0 && month <= 12)) {
      setDataNascimento(input);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Signo App</Text>
      <View>
        <Text style={styles.label}>Digite seu nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={text => setNome(text)}
          placeholder="Nome" />
        <Text style={styles.label}>Digite sua data de nascimento</Text>
        <TextInput
          style={styles.input}
          value={dataNascimento}
          onChangeText={handleDateChange}
          placeholder='Ex: 29/01'
        />
        <TouchableOpacity style={styles.btn} onPress={getSign(dataNascimento)}><Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Pesquisar o Signo</Text></TouchableOpacity>
        {dataNascimento !== "" && (
          <Text>Seu signo é de {getSign(dataNascimento)}</Text>
        )}
      </View>
    </View>
  );
}

function getSign(date) {
  const dateArray = date.split('/')
  const dia = parseInt(dateArray[0], 10);
  const mes = parseInt(dateArray[1], 10);

  if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    return "Aquário";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    return "Peixes";
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    return "Áries";
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    return 'Touro';
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    return 'Gêmeos';
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    return 'Câncer';
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    return 'Leão';
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    return 'Virgem';
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    return 'Libra';
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    return 'Escorpião';
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    return 'Sagitário';
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    return 'Capricórnio';
  } else {
    return 'Desconhecido';
  }
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
    padding: 10,
    color: "#000",
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginTop: 18
  }
});
