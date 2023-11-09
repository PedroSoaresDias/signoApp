import { View, Text, StyleSheet } from "react-native";

export default function Touro() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Touro</Text>
            <Text style={styles.date}>20/04 até 20/05</Text>
            <Text style={styles.description}>
            Taurinos agem com segurança e estratégia. Apesar da teimosia, expressam amor de forma prática e gentil.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#8F2E04',
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