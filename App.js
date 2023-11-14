import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getSign } from './SignList/zodiacUtils';

// Páginas
import Aquario from './pages/Aquario';
import Libra from './pages/Libra';
import Leao from './pages/Leao';
import Gemeos from './pages/Gemeos';
import Aries from './pages/Aries';
import Cancer from './pages/Cancer';
import Touro from './pages/Touro';
import Virgem from './pages/Virgem';
import Escorpiao from './pages/Escorpiao';
import Capricornio from './pages/Capricornio';
import Peixes from './pages/Peixes';
import Sagitario from './pages/Sagitario';

function HomeScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [inputDate, setInputDate] = useState("");

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
        const sign = getSign(formattedDate);
        if (sign !== "Desconhecido") {
          navigation.navigate(sign, {sign});
        }
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
        {/* {inputDate !== "" && (
          <Text>Seu signo é de {signo}</Text>
        )} */}
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: true }} name="Aquario" component={Aquario} />
        <Stack.Screen options={{ headerShown: true }} name="Libra" component={Libra} />
        <Stack.Screen options={{ headerShown: true }} name="Leao" component={Leao} />
        <Stack.Screen options={{ headerShown: true }} name="Gemeos" component={Gemeos} />
        <Stack.Screen options={{ headerShown: true }} name="Aries" component={Aries} />
        <Stack.Screen options={{ headerShown: true }} name="Cancer" component={Cancer} />
        <Stack.Screen options={{ headerShown: true }} name="Touro" component={Touro} />
        <Stack.Screen options={{ headerShown: true }} name='Virgem' component={Virgem} />
        <Stack.Screen options={{ headerShown: true }} name='Peixes' component={Peixes} />
        <Stack.Screen options={{ headerShown: true }} name='Capricornio' component={Capricornio} />
        <Stack.Screen options={{ headerShown: true }} name='Escorpiao' component={Escorpiao} />
        <Stack.Screen options={{ headerShown: true }} name='Sagitario' component={Sagitario} />
      </Stack.Navigator>
    </NavigationContainer>
  )
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