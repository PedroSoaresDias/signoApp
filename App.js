import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
  const [dataNascimento, setDataNascimento] = useState("");

  const handlePesquisar = () => {
    const signo = getSigno(
      parseInt(dataNascimento.split('/')[0], 10),
      parseInt(dataNascimento.split('/')[1], 10)
    );

    navigation.navigate(signo, { signoNome: signo, nome: nome });
  };

  // importar peixes e sagitario
  const getSigno = (dia, mes) => {
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      return "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      return "Touro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      return "Gemeos";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      return "Cancer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      return "Leao";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      return "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      return "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      return "Escorpiao";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      return "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      return "Capricornio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return "Aquario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return "Peixes";
    }

    return "Signo Desconhecido";
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./assets/images/logoSigno.png')} style={styles.logoSigno}
        />
        <Text style={styles.label}>Digite seu nome</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          value={nome}
          onChangeText={text => setNome(text)}
          placeholder="José das Couves"
        />

        <Text style={styles.label}>Digite sua data de nascimento</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          value={dataNascimento}
          onChangeText={text => setDataNascimento(text)}
          placeholder="Ex: 19/01"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={handlePesquisar}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Pesquisar Signo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="HomeScreen">
        <stack.Screen name="React Sign" component={HomeScreen} />
        <stack.Screen name="Aries" component={Aries} />
        <stack.Screen name="Cancer" component={Cancer} />
        <stack.Screen name="Touro" component={Touro} />
        <stack.Screen name="Gemeos" component={Gemeos} />
        <stack.Screen name="Leao" component={Leao} />
        <stack.Screen name="Virgem" component={Virgem} />
        <stack.Screen name="Libra" component={Libra} />
        <stack.Screen name="Escorpiao" component={Escorpiao} />
        <stack.Screen name="Capricornio" component={Capricornio} />
        <stack.Screen name="Aquario" component={Aquario} />
        <stack.Screen name="Sagitario" component={Sagitario} />
        <stack.Screen name="Peixes" component={Peixes} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4158FF',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
    color: '#fff',
  },
  input: {
    borderRadius: 20,
    borderStyle: 'solid',
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#F0F0F0',
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    color: "#000",
    borderRadius: 24,
    backgroundColor: '#FDD682',
    marginTop: 80,
  },
  logoSigno: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
});