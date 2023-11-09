import { View, Text, StyleSheet } from "react-native";

export default function Virgem() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Libra</Text>
            <Text style={styles.date}>23/09 até 22/10</Text>
            <Text style={styles.description}>
            Os Virginianos são leais e práticos nos sentimentos. Cuidado com as manias de limpeza e organização em casos menos maduros.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#E1266F',
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