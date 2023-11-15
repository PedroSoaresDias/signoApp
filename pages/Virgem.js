import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function Virgem({ route }) {
    const { signoNome, nome } = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Libra</Text>
            <Text style={styles.date}>23/08 até 22/09</Text>
            <Text style={styles.userName}>{`Saudações, ${nome}! ✨`}</Text>
            <Image
                source={require('../assets/images/virgem.png')}
                style={{ width: 300, height: 300, marginBottom: 10, }}
            />
            <Text style={styles.description}>
            Os Virginianos são leais e práticos nos sentimentos. Cuidado com as manias de limpeza e organização em casos menos maduros.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#E1266F',
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