import { View, Image } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useContext } from "react";
import { DesejosContext } from "../contexts/DesejosContext";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { ProdutoContext } from "../contexts/ProdutoContext";

const CardDesejo = (props) => {
    const { findProduto } = useContext(ProdutoContext)
    const { adicionar } = useContext(CarrinhoContext)
    const { removerDesejo } = useContext(DesejosContext)
    return (
        <View style={{ flexDirection: 'row', minHeight: 72, maxHeight: 72, backgroundColor: '#f0f0f0', padding: 8, marginBottom: 8, borderRadius: 8 }}>
            <View style={{ height: 56, width: 56, backgroundColor: '#d9d9d9', borderRadius: 8, marginRight: 4, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                <Image source={{ uri: props.imagem }} style={{ flex: 1, width: 56, height: 56, borderRadius: 8 }} resizeMode='stretch' />
            </View>
            <View style={{ flex: 1, backgroundColor: '#d9d9d9', borderRadius: 8, marginRight: 4, marginLeft: 4, paddingLeft: 4, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text variant="bodySmall">{props.nome} </Text>
            </View>
            <View style={{ flex: 0.15, borderRadius: 8, marginLeft: 4, marginRight: 4, alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'cart-plus'} iconColor="green" onPress={() => {
                    const produto = findProduto(props.produtoId)
                    adicionar(produto.nome, produto.preco, produto.imagem)
                    removerDesejo(props.itemId)
                }} />
            </View>
            <View style={{ flex: 0.15, borderRadius: 8, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'close'} iconColor="red" onPress={() => { removerDesejo(props.itemId) }} />
            </View>
        </View>
    );
}

export default CardDesejo;