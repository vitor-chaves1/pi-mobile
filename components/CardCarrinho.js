import { View, Image } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";


const CardCarrinho = (props) => {
    const { remover } = useContext(CarrinhoContext);
    return (
        <View style={{ flex: 1, minHeight: 120, backgroundColor: "#f0f0f0", borderRadius: 8, padding: 8, flexDirection: 'row', marginBottom: 8 }}>
            <View style={{ minHeight: 104, width: 104, backgroundColor: '#d9d9d9', borderRadius: 8, borderWidth: 1, marginRight: 8 }}>
            <Image source={{ uri: props.imagem }} style={{ flex: 1, width: undefined, height: undefined, borderRadius: 8 }} resizeMode="stretch" />
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', maxHeight: 48, paddingHorizontal: 4, borderRadius: 8 }}>
                        <Text variant="labelSmall">{props.nome}</Text>
                    </View>
                    <IconButton onPress={() => remover(props.itemId)} icon='close-circle' size={32} iconColor="red" style={{ margin: 0 }} />
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', paddingHorizontal: 4, borderRadius: 8, marginRight: 4, alignItems: 'center' }}>
                        <Text variant="labelSmall">Qtd.</Text>
                        <Text variant="titleMedium">1</Text>
                        {// em desenvolvimento
                        }
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', maxHeight: 48, paddingHorizontal: 4, borderRadius: 8, marginLeft: 4, alignItems: 'center' }}>
                        <Text variant="bodySmall">R$</Text>
                        <Text variant="titleMedium">{props.preco} </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardCarrinho;