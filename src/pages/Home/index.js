import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import firebase from "../../firebaseConnection";

export default function Home() {
    const [name, setName] = useState(' ')

    useEffect(() => {
        async function getName() {
            firebase.database().ref('Alunos/1/name').on('value', (snapshot) => {
                setName(snapshot.val())
            });
        }

        getName()
    }, [])

    const navigation = useNavigation();

    function navigateDetails() {
        navigation.navigate('details', {name: 'Doni', email:'doni@gmail.com'})
    }

    return (
        <View>
            <Text>TELA HOME</Text>
            <Text>{name}</Text>
            <Button title="PÁGINA DE Detalhes" onPress={navigateDetails}></Button>
        </View>
    )
}