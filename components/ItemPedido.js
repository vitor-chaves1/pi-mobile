import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";

const ItemPedido = (props) => {
    return (
        <View style={{ height: 40, backgroundColor: '#d9d9d9', flexDirection: 'row', padding: 4, }}>
            <View style={{ flex: 0.1, marginRight: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="labelLarge">{props.qtd}</Text>
            </View>
            <View style={{ flex: 1, marginRight: 2, marginLeft: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text variant="bodyMedium">{props.produto}</Text>
            </View>
            <View style={{ flex: 0.5, marginRight: 2, marginLeft: 2, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text variant="bodyMedium">{props.preco}</Text>
            </View>
            <View style={{ flex: 0.15, marginLeft: 2, alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'comment-plus-outline'} onPress={() => { }} />
            </View>
        </View>
    );
}

export default ItemPedido;