import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, Button, FlatList, Image } from "react-native";
import StudentCard from "../../components/studentCard";
import firebase from "../../firebaseConnection";

export default function Home() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        async function getStudents() {
            
            firebase.database().ref('Alunos').on('value', (snapshot) => {
                setStudents([])
                snapshot.forEach((student) => {
                    var data = {
                        key: student.key,
                        name: student.val().name,
                        note1: student.val().note1,
                        note2: student.val().note2,
                        note3: student.val().note3,
                        img: student.val().img,
                    }

                    setStudents(student => [...student, data]);
                })
            });
        }
        getStudents()
    }, [])

    return (
        <View>
            <Text>TELA HOME</Text>
            <FlatList 
                style={{width: '100%'}}
                data={students}
                numColumns = {1}
                keyExtractor = { item => item.key}
                renderItem = { ({item}) => <StudentCard img={item.img} name={item.name} note1={item.note1} note2={item.note2} note3={item.note3} />}
            />
            
        </View>
    )
}