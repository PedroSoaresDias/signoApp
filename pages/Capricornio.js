import { View, Text, StyleSheet } from "react-native";

export default function Capricornio() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Capricórnio</Text>
            <Text style={styles.date}>22/12 até 19/01</Text>
            <Text style={styles.description}>
            Pacientes e disciplinados, os capricornianos buscam sucesso através da persistência. Devem cuidar do foco excessivo no materialismo e do pessimismo.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#9A00E1',
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