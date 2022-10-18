import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import firebase from '../../firebaseConnection'

export default function About() {

    const [name, setName] = useState("");
    const [note1, setNote1] = useState("");
    const [note2, setNote2] = useState("");
    const [note3, setNote3] = useState("");
    const [img, setImg] = useState("");

    async function register() {
        const students = await firebase.database().ref('Alunos');
        const key = students.push().key;
        students.child(key).set({
            name: name,
            note1: note1,
            note2: note2,
            note3: note3,
            img: img
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Alunos</Text>
            
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Nome: </Text>
                <TextInput placeholder="Digite o nome do energunemo" style={styles.input} 
                onChangeText = {(text) => setName(text)} />                
            </View>
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Nota 1: </Text>
                <TextInput placeholder="Digite a nota 1 do energunemo" style={styles.input} 
                onChangeText = {(text) => setNote1(text)} />
            </View>
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Nota 2: </Text>
                <TextInput placeholder="Digite a nota 2 do energunemo" style={styles.input} 
                onChangeText = {(text) => setNote2(text)} />
            </View>
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Nota 3: </Text>
                <TextInput placeholder="Digite a nota 3 do energunemo" style={styles.input} 
                onChangeText = {(text) => setNote3(text)} />
            </View>
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Imagem: </Text>
                <TextInput placeholder="insira o link da imagem do energunemo" style={styles.input}
                onChangeText = {(text) => setImg(text)} />

            </View>
            <View style={styles.labelAndInput}>
                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
        width: '100%'
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 5,
    },
    labelAndInput:{
        width: '290px'
    },
    label: {
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 5,
    },
    input: {
        borderWidth: '1px',
        borderRadius: 8,
        borderColor: 'black',
        padding: '10px',
    },
    button: {
        borderWidth: '1px',
        borderRadius: 8,
        width: '100%',
        fontWeight: 600,
        textAlign: 'center',
        fontFamily: 'Poppins',
        paddingTop: 5,
        paddingBottom: 5,
    }
})