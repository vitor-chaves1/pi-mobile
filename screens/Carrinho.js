import { ScrollView, View } from "react-native";
import TituloTela from "../components/TituloTela";
import CardCarrinho from "../components/CardCarrinho";
import { Text } from "react-native-paper";

const Carrinho = () => {
    return (
        <View style={{ flex: 1 }}>
            <TituloTela titulo="Meu Carrinho" />
            <ScrollView>
                <View style={{ marginHorizontal: 16, marginTop: 8 }}>
                    <CardCarrinho />
                    <CardCarrinho />
                </View>
            </ScrollView>
            <View style={{ height: 120, backgroundColor: '#d9d9d9', paddingHorizontal: 16, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 8 }}>
                    <View style={{ backgroundColor: '#f0f0f0', flex: 0.6, height: 56, marginRight: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="headlineMedium">8</Text>
                        <Text variant="labelMedium">Produtos</Text>
                    </View>
                    <View style={{ backgroundColor: '#f0f0f0', flex: 1, height: 56, marginLeft: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="headlineMedium">R$ 12345,67</Text>
                        <Text variant="labelMedium">Total a Pagar</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#81C784', height: 40, marginTop: 8, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                    <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>FINALIZAR COMPRA</Text>
                </View>
            </View>
        </View>
    );
}

export default Carrinho;