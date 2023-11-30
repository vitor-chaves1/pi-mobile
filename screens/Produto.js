import { View, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Text, IconButton } from 'react-native-paper'
import ContainerCollapsible from "../components/ContainerCollapsible";

const Produto = () => {
    const windowWidth = Dimensions.get('window').width - 32;
    return (
        <View style={{ margin: 8, marginLeft: 16, marginRight: 16, flex: 1 }}>
            <ScrollView>
                <View style={{ flexWrap: 'nowrap', minHeight: 64, backgroundColor: '#f0f0f0', marginBottom: 8, borderRadius: 8, paddingLeft: 8 }}>
                    <Text variant={'titleSmall'} >Nome produto Nome produto Nome produto Nome produto Nome produto </Text>
                </View>
                <View style={{ width: windowWidth, height: windowWidth, backgroundColor: '#d9d9d9', borderRadius: 8, borderWidth: 1, marginBottom: 8 }}>
                    <Text>Imagem</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ backgroundColor: '#f0f0f0', minHeight: 64, flex: 1, marginRight: 4, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant={'headlineSmall'}>R$ 12345,67</Text>
                    </View>
                    <View style={{ backgroundColor: '#81C784', minHeight: 64, flex: 1, marginLeft: 4, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', borderRightWidth: 1 }}>
                            <IconButton
                                icon="cart-plus" iconColor={'#000'} size={32} style={{margin:0}}
                            />
                            <Text variant="labelSmall">Adicionar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                            <IconButton
                                icon="heart-plus-outline" iconColor={'#000'} size={32}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ContainerCollapsible titulo="Caracteristicas">
                    <Text>Caracteristicas do Produto Aqui</Text>
                </ContainerCollapsible>
                <ContainerCollapsible titulo="Informações Técnicas">
                    <Text>Informações Técnicas Aqui</Text>
                </ContainerCollapsible>
            </ScrollView>
        </View>
    );
}

export default Produto;