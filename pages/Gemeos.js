import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function Gemeos({ route }) {
    const { signoNome, nome } = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Gêmeos</Text>
            <Text style={styles.date}>21/05 até 20/06</Text>
            <Text style={styles.userName}>{`Saudações, ${nome}! ✨`}</Text>
            <Image
                source={require('../assets/images/gemeos.png')}
                style={{ width: 300, height: 300, marginBottom: 10, }}
            />
            <Text style={styles.description}>
                Geminianos são curiosos e versáteis, fazem amigos facilmente. Adaptáveis, transitam por diferentes perspectivas.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#5CAB7C',
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