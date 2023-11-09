import { View, Text, StyleSheet } from "react-native";

export default function Leao() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leão</Text>
            <Text style={styles.date}>23/07 até 22/08</Text>
            <Text style={styles.description}>
            Leoninos buscam destaque, são energéticos, mas cuidado com autoritarismo e prepotência.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#E65900',
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