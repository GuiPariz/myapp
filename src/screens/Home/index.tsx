import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
        // Adicionar novo participante ao evento

    function handleParticipantAdd() {
        console.log("Participant added");

    }
        // Remover um paricipante do evento
    function handleParticipantRemoved( name: string ) {
        console.log(`${name} foi removido!`)

    }

    return (
        <View style={styles.Container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Sábado, 8 de Agosto de 2025
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={"#555"}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant name='Guilherme' onRemove={()=> handleParticipantRemoved('Guilherme')}/>
            <Participant name='Ricardo' onRemove={()=> handleParticipantRemoved('Ricaro')}/>
            <Participant name='Israel' onRemove={()=> handleParticipantRemoved('Israel')}/>
            <Participant name='Luiz' onRemove={()=> handleParticipantRemoved('Luiz')}/>
        </View>
    )
}
