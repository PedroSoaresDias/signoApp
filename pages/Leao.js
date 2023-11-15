import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function Leao({ route }) {
    const { signoNome, nome } = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Leão</Text>
            <Text style={styles.date}>23/07 até 22/08</Text>
            <Text style={styles.userName}>{`Saudações, ${nome}! ✨`}</Text>
            <Image
                source={require('../assets/images/leao.png')}
                style={{ width: 300, height: 300, marginBottom: 10, }}
            />
            <Text style={styles.description}>
            Leoninos buscam destaque, são energéticos, mas cuidado com autoritarismo e prepotência.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#E65900',
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