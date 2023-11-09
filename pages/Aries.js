import { View, Text, StyleSheet } from "react-native";

export default function Aries() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Áries</Text>
            <Text style={styles.date}>21/03 até 19/04</Text>
            <Text style={styles.description}>
            Os Arianos são dinâmicos, sinceros e individualistas. Têm espírito de liderança, mas podem parecer competitivos e autoritários.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#F10000',
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