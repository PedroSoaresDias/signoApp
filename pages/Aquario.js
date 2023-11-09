import { ScrollView, Text, StyleSheet } from "react-native";

export default function Aquario() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Aquário</Text>
            <Text style={styles.date}>20/01 até 18/02</Text>
            <Text style={styles.description}>
                As relações de amizade tendem a ser bem importantes para o aquariano, esse sentimento nasce, principalmente, pelo forte senso de coletividade presente. Consciência de que a felicidade de um só é possível com a felicidade de todos é bem característico nesse signo. Em casos com pouca maturidade, essa relação aquariana com a coletividade pode se manifestar em posturas extremistas ou em personalidades rebeldes sem causa.
            </Text>
        </ScrollView>
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