import { View } from "react-native";
import { Text } from "react-native-paper";

const TituloTela = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#d9d9d9', maxHeight: 28, flexDirection: 'row', justifyContent: 'flex-start',alignItems:'center', padding:4, paddingLeft:16, marginBottom:4 }}>
            <Text variant="titleSmall">{props.titulo}</Text>
        </View>
    );
}

export default TituloTela;