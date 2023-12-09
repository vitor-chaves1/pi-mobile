import { View } from "react-native";
import { Text } from "react-native-paper";

const ItemPedido = (props) => {
    return (
        <View style={{ height: 40, backgroundColor: '#d9d9d9', flexDirection: 'row', padding: 4, }}>
            <View style={{ flex: 0.1, marginRight: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="labelLarge">{props.id}</Text>
            </View>
            <View style={{ flex: 1, marginRight: 2, marginLeft: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text variant="bodyMedium">{props.produto}</Text>
            </View>
        </View>
    );
}

export default ItemPedido;