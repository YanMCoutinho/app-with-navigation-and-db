import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Details() {
    
    const routes =useRoute();
    
    return (
        <View>
            <Text>Tela de Detalhes</Text>
            <Text>{routes.params.name}</Text>
            <Text>{routes.params.email}</Text>
        </View>
    )
}