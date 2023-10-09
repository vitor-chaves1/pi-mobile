import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useState } from "react";
import Collapsible from "react-native-collapsible";
import Pedido from "./Pedido";


const CardHistorico = () => {
    const [visivel, setVisivel] = useState(true)
    const toggleVisivel = () => setVisivel(!visivel)

    const estilos = StyleSheet.create({
        collapsibleFechado: { flexDirection: 'row', height: 64, backgroundColor: '#f0f0f0', padding: 8, marginBottom: 8, borderRadius: 8 },
        collapsibleAberto: { flexDirection: 'row', height: 64, backgroundColor: '#f0f0f0', padding: 8, borderTopRightRadius: 8, borderTopLeftRadius: 8 }
    })


    return (
        <>
            <TouchableOpacity onPress={toggleVisivel}>
                <View style={visivel ? (estilos.collapsibleFechado) : (estilos.collapsibleAberto)}>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', borderRadius: 8, marginRight: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant='headlineSmall'>Pedido N</Text>
                    </View>
                    <View style={{ flex: 0.5, backgroundColor: '#d9d9d9', borderRadius: 8, marginRight: 4, marginLeftt: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="titleLarge">8</Text>
                        <Text variant="bodySmall">Produtos</Text>
                    </View>
                    <View style={{ flex: 0.6, backgroundColor: '#d9d9d9', borderRadius: 8, marginLeftt: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="bodySmall">R$</Text>
                        <Text variant="titleMedium">12345,67</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={visivel} align="center">
                <View style={{ flex: 1, backgroundColor: '#f0f0f0', paddingHorizontal: 8, paddingBottom: 0, paddingTop: 0, }}>
                    <View style={{ height: 22, backgroundColor: '#d9d9d9', flexDirection: 'row', padding: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
                        <View style={{ flex: 0.2, marginRight: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text variant="labelSmall">Qtd.</Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 2, marginLeft: 2, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 3 }}>
                            <Text variant="labelSmall">Produto</Text>
                        </View>
                        <View style={{ flex: 0.5, marginRight: 2, marginLeft: 2, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text variant="labelSmall">Preco</Text>
                        </View>
                        <View style={{ flex: 0.20, marginLeft: 2, alignItems: 'center', justifyContent: 'center' }}>
                        </View>
                    </View>
                </View>
                <Pedido />
            </Collapsible>
        </>
    );

}

export default CardHistorico;