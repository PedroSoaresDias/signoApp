import { View, Text, StyleSheet } from "react-native";

export default function Touro() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Peixes</Text>
            <Text style={styles.date}>22/11 até 21/12</Text>
            <Text style={styles.description}>
            Sagitarianos buscam experiências e conhecimento, mas evitem comportamentos vaidosos e autoritários.
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