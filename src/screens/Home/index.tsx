import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

  // tipando participantes
  type Participants = {
    name: string;
    id: number;
  }

  //state do input

  const [participant, setParticipant] = useState<string>("")

  //lista tipada

  const [participantList, setParticipantList] = useState<Participants[]>([
  ])

  // Adicionar novo participante ao evento

  function handleParticipantAdd() {
    // verifica se o input está vazio
    if (participant.trim() === "") {
      return Alert.alert("Erro", "O nome do participante não pode estar vazio.");
    }
    // verifica se o participante ja existe 
    if (participantList.some(participants => participants.name === participant)){
        return Alert.alert("Participante existe", " Já existe uma participant na lista com esse nome")
    }
    // criando um novo participante
    const newParticipant: Participants = {
      name: participant,
      id: participantList.length + 1
    }
    // adicionado o novo participante dentro da lista existente
    setParticipantList(prev => [...prev, newParticipant])
    setParticipant("");
    Alert.alert('Adicionado', `Participante ${participant} adicionado com sucesso!`)

  }
  // Remover um paricipante do evento
  function handleParticipantRemoved(name:string, id:number) {


    Alert.alert('Remover', `Deseja remover o ${name}?`, [
      {
        text: 'sim',
        onPress: () => setParticipantList(participantList.filter(participants => participants.id !== id)),        
      },
      {
        text: 'Não',
        onPress: () => Alert.alert('Cancelado'),
        style: 'cancel',
      }
      
    ])

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
          value={participant}
          onChangeText={setParticipant}

        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemoved(item.name, item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhum participante cadastrado</Text>
        )}
      />

      
    </View>
  )
}
