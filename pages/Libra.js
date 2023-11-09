import { View, Text, StyleSheet } from "react-native";

export default function Libra() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Libra</Text>
            <Text style={styles.date}>23/09 até 22/10</Text>
            <Text style={styles.description}>
            Librianos têm conexão com as artes e buscam justiça. Evitem vaidade excessiva e valorizem o respeito mútuo nas relações.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#563DBB',
    },
    title: {
        fontSize: 24,
        fontWeight: 800,
        color: "#fff",
        marginBottom: 10,
    },
    date: {
        fontSize: 20,
        fontWeight: 700,
        fontStyle: "italic",
        color: "#fff",
        marginBottom: 10,
    },
    description: {
        fontFamily: 16,
        fontWeight: 600,
        color: '#fff',
    }
})