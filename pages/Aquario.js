import { ScrollView, Text, StyleSheet } from "react-native";

export default function Aquario() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Aquário</Text>
            <Text style={styles.date}>20/01 até 18/02</Text>
            <Text style={styles.description}>
            As amizades são essenciais para os aquarianos, que valorizam a coletividade. Cuidado com posturas extremistas e rebeldias sem causa.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#2E6ACF',
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