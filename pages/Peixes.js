import { View, Text, StyleSheet } from "react-native";

export default function Touro() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Peixes</Text>
            <Text style={styles.date}>19/02 até 20/03</Text>
            <Text style={styles.description}>
            Empatia e humildade definem os piscianos, conectados com a intuição. Cuidado com a tendência a sonhar muito.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#2A98D8',
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