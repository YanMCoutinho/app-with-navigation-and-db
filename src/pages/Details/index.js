import { useRoute } from "@react-navigation/native";
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Details() {
    
    const routes = useRoute();
    function calcMean() {
        let note1 = isNaN(routes.params?.note1) ? routes.params?.note1.length : routes.params?.note1
        let note2 = isNaN(routes.params?.note2) ? routes.params?.note2.length : routes.params?.note2
        let note3 = isNaN(routes.params?.note3) ? routes.params?.note3.length : routes.params?.note3
    
        return ((note1 + note2 + note3) / 3)
    }
    
    let Result = <></>
    
    if (calcMean() > 6) {
        Result = <Text style={[styles.approved, styles.resultText]}>Aprovado</Text>
    } else {
        Result = <Text style={[styles.disapproved, styles.resultText]}>Reprovado</Text>
    }


    return (
        <View style={styles.container}>
            <Image resizeMode='cover' source={{uri: routes.params?.img}} style={styles.img} />
            
            <View style={styles.flex}>
                <Text style={styles.text}>Nome: </Text>
                <TextInput style={styles.textInput} value={routes.params?.name} placeholder="Digite o nome." />
            </View>
            
            <View style={styles.flex}>
                <Text style={styles.text}>Nota 1: </Text>
                <TextInput style={styles.textInput} value={routes.params?.note1} placeholder="Digite a 1º nota." />
            </View>
            
            <View style={styles.flex}>
                <Text style={styles.text}>Nota 2: </Text>
                <TextInput style={styles.textInput} value={routes.params?.note2} placeholder="Digite a 2º nota." />
            </View>
            
            <View style={styles.flex}>
                <Text style={styles.text}>Nota 3: </Text>
                <TextInput style={styles.textInput} value={routes.params?.note3} placeholder="Digite a 3º nota." />
            </View>

            <View style={styles.flex}>
                <Text style={styles.text}>Link da Imagem: </Text>
                <TextInput style={styles.textInput} value={routes.params?.img} placeholder="Digite o link da imagem." />
            </View>

            {Result}

            <View style={[styles.flex, {maxWidth: 320}]}>
                <TouchableOpacity style={[styles.alter, styles.button]}>
                    <Text style={styles.textButton}>ALTERAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.del, styles.button]}>
                    <Text style={styles.textButton}>DELETAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      
    },
    img: {
        width: 320,
        height: 320,
        margin: 'auto',
        borderRadius: 10,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '80%',
        minWidth: 320,
        marginHorizontal: 'auto',
        marginTop: 20,
    }, 
    text: {
        fontWeight: 600,
        width: '20%',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        paddingLeft: 10,
    },
    resultText: {
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 10,
    }, 
    approved: {
        color: 'green',
    },
    disapproved: {
        color: 'red',
    },
    button: {
        textAlign: 'center',
        
        height: 40,
        width: 150,
    },
    alter: {
        backgroundColor: 'green',

    },
    del: {
        backgroundColor: 'red',
    },
    textButton: {
        color: 'white',
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 40,
    }
})
