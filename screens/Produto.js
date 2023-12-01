import { View, Dimensions, ScrollView, TouchableOpacity, Image } from "react-native";
import { Text, IconButton } from 'react-native-paper'
import ContainerCollapsible from "../components/ContainerCollapsible";
import { useContext } from "react";
import { ProdutoContext } from "../contexts/ProdutoContext";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { DesejosContext } from "../contexts/DesejosContext";

const Produto = ({ route }) => {
    const windowWidth = Dimensions.get('window').width - 32;
    const { produtoId } = route.params;
    const { findProduto } = useContext(ProdutoContext);
    const produto = findProduto(produtoId);

    const { adicionar } = useContext(CarrinhoContext);
    const { adicionarDesejo } = useContext(DesejosContext)
    return (
        <View style={{ margin: 8, marginLeft: 16, marginRight: 16, flex: 1 }}>
            <ScrollView>
                <View style={{ flexWrap: 'nowrap', maxHeight: 72, backgroundColor: '#f0f0f0', marginBottom: 8, borderRadius: 8, paddingLeft: 8 }}>
                    <Text variant={'titleMedium'} >{produto.nome} </Text>
                </View>
                <View style={{ width: windowWidth, height: windowWidth, backgroundColor: '#d9d9d9', borderRadius: 8, borderWidth: 1, marginBottom: 8 }}>
                    <Image source={{ uri: produto.imagem }} style={{ flex: 1, width: undefined, height: undefined, borderRadius: 8 }} resizeMode="stretch" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ backgroundColor: '#f0f0f0', minHeight: 64, flex: 1, marginRight: 4, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant={'headlineSmall'}>R$ {produto.preco}</Text>
                    </View>
                    <View style={{ backgroundColor: '#81C784', minHeight: 64, flex: 1, marginLeft: 4, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => adicionar(produto.nome, produto.preco, produto.imagem)} style={{ flex: 1, alignItems: 'center', borderRightWidth: 1 }}>
                            <IconButton
                                icon="cart-plus" iconColor={'#000'} size={32} style={{ margin: 0 }}
                            />
                            <Text variant="labelSmall">Adicionar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }} onPress={() => adicionarDesejo(produto.nome, produto.imagem, produto.id)} >
                            <IconButton
                                icon="heart-plus-outline" iconColor={'#000'} size={32}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ContainerCollapsible titulo="Caracteristicas">
                    <Text>{produto.descricao}</Text>
                </ContainerCollapsible>
                <ContainerCollapsible titulo="Informações Técnicas">
                    <Text>{produto.categoria}</Text>
                </ContainerCollapsible>
            </ScrollView>
        </View>
    );
}

export default Produto;