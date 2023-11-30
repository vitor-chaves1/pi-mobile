import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";

const CardCarrinho = () => {
    return (
        <View style={{ flex: 1, minHeight: 120, backgroundColor: "#f0f0f0", borderRadius: 8, padding: 8, flexDirection: 'row', marginBottom: 8 }}>
            <View style={{ minHeight: 104, width: 104, backgroundColor: '#d9d9d9', borderRadius: 8, borderWidth: 1, marginRight: 8 }}>
                <Text>Img</Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', maxHeight: 48, paddingHorizontal: 4, borderRadius: 8 }}>
                        <Text variant="labelSmall">Nome Produto Nome Produto Nome Produto Nome Produto Nome Produto Nome Produto </Text>
                    </View>
                    <IconButton onPress={() => { }} icon='close-circle' size={32} iconColor="red" style={{ margin: 0 }} />
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', paddingHorizontal: 4, borderRadius: 8, marginRight: 4, alignItems: 'center' }}>
                        <Text variant="labelSmall">Qtd.</Text>
                        <Text variant="titleMedium">8</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', maxHeight: 48, paddingHorizontal: 4, borderRadius: 8, marginLeft: 4, alignItems: 'center' }}>
                        <Text variant="bodySmall">R$</Text>
                        <Text variant="titleMedium">12345,6 </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardCarrinho;