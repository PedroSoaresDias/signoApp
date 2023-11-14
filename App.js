import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [signo, setSigno] = useState("Desconhecido");

  function isValidDate(input) {
    if (!input || input.trim() === "") return false;

    const dateArray = input.split('/');
    const day = parseInt(dateArray[0], 10);
    const month = parseInt(dateArray[1], 10);
  
    return (day > 0 && day <= 31) && (month > 0 && month <= 12);
  }

  const handleDateChange = (input) => {
    if (input.length === 5) {
      const formattedDate = input.replace("/[^0-9]/g", '').replace("/(\d{2})(\d{2})/", '$1/$2');
  
      if (isValidDate(formattedDate)) {
        setInputDate(formattedDate);
        setSigno(getSign(formattedDate));
      }
    } else {
      setInputDate(input)
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
          value={inputDate}
          onChangeText={(text) => setInputDate(text)}
          placeholder='Ex: 29/01'
          maxLength={5}
        />
        <TouchableOpacity style={styles.btn} onPress={() => handleDateChange(inputDate)}><Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Pesquisar o Signo</Text></TouchableOpacity>
        {inputDate !== "" && (
          <Text>Seu signo é de {signo}</Text>
        )}
      </View>
    </View>
  );
}

function getSign(date) {
  const dateArray = date.split('/')
  const dia = parseInt(dateArray[0], 10);
  const mes = parseInt(dateArray[1], 10);

  const zodiacSigns = [
    { sign: 'Aquário', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
    { sign: 'Peixes', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
    { sign: 'Áries', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
    { sign: 'Touro', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
    { sign: 'Gêmeos', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
    { sign: 'Câncer', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
    { sign: 'Leão', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
    { sign: 'Virgem', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
    { sign: 'Libra', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
    { sign: 'Escorpião', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
    { sign: 'Sagitário', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
    { sign: 'Capricórnio', start: { month: 12, day: 22 }, end: { month: 1, day: 19} },
  ]

  const sign = zodiacSigns.find(sign =>
    (mes === sign.start.month && dia >= sign.start.day) ||
    (mes === sign.end.month && dia <= sign.end.day)
  );

  return sign ? sign.sign : "Desconhecido";
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