import { View, Text, StyleSheet } from "react-native";

export default function Escopiao() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escorpião</Text>
            <Text style={styles.date}>23/10 a 21/11</Text>
            <Text style={styles.description}>
            Escorpianos são fortes, resilientes e intensos. Manifestam generosidade e autocontrole diante de desafios.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#182D64',
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