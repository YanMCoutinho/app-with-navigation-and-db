import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function StudentCard({img, name, note1, note2, note3}) {
    
    const navigation = useNavigation();

    function goToDetailsPage() {
        navigation.navigate('details', {name: name, note1: note1, note2: note2, note3: note3, img: img});
    }

    return (
        <TouchableOpacity onPress={goToDetailsPage} style={styles.container}>
            <Image resizeMode='cover' source={{uri:img}} style={styles.img} />
            <Text style={styles.text}> {name}</Text>
            <Text style={styles.text}> {note1}</Text>
            <Text style={styles.text}> {note2}</Text>
            <Text style={styles.text}> {note3}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        width: '70%',
        minWidth: 320,
        maxWidth: 700,  
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,

    },
    img: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
    text: {
        width: '100%',
        textAlign: 'center',
        
    }
})