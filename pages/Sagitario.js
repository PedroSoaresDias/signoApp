import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function Sagitario({ route }) {
    const { signoNome, nome } = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sagitário</Text>
            <Text style={styles.date}>22/11 até 21/12</Text>
            <Text style={styles.userName}>{`Saudações, ${nome}! ✨`}</Text>
            <Image
                source={require('../assets/images/sagitario.png')}
                style={{ width: 300, height: 300, marginBottom: 10, }}
            />
            <Text style={styles.description}>
                Sagitarianos buscam experiências e conhecimento, mas evitem comportamentos vaidosos e autoritários.Como busca experiências e conhecimento sem cair em comportamentos vaidosos?
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#BD0000',
        padding: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "#FDD682",
        marginBottom: 0,
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 30,
    },
    greeting: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FDD682",
        justifyContent: 'center',
    }
})