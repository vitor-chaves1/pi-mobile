import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import CampoInput from "../components/CampoInput";
import { useContext } from "react";
import { PerfilContext } from "../contexts/PerfilContext";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { PedidosContext } from "../contexts/PedidosContext";

const Finalizar = ({ navigation }) => {
    const { dados } = useContext(PerfilContext)
    const { carrinho, total, produtos, limparCarrinho } = useContext(CarrinhoContext)
    const { criarPedido } = useContext(PedidosContext)

    const handleFinalizar = () => {
        if (total == 0) {
            alert('Erro!\nPor favor encher o Carrinho')
            return
        }
        if (dados.endereco) {
            criarPedido(produtos, total, dados)
            alert('Pedido Realizado com Sucesso')
            limparCarrinho()
            navigation.navigate('Historico')
        } else {
            alert('Por favor atualize seus dados antes de fazer o pedido')
            navigation.navigate('Perfil')
        }
    }
    editable = false
    return (
        <View style={{ backgroundColor: '#81C784', flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
            <ScrollView>
                <Text variant="titleLarge" style={{ paddingBottom: 8 }}>Confirmar dados</Text>
                <View style={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: 8, padding: 8 }}>
                    <View style={{ flex: 1 }}>
                        <CampoInput label='Nome' value={dados.nome} editable={editable} style={{ marginVertical: 8 }} />
                        <CampoInput label='Telefone' value={dados.telefone} editable={editable} style={{ marginVertical: 8 }} />
                        <CampoInput label='CEP' value={dados.cep} editable={editable} style={{ marginVertical: 8 }} />
                        <CampoInput label='Endereco' value={dados.endereco} editable={editable} style={{ marginVertical: 8 }} />
                        <CampoInput label='Complemento' value={dados.complemento} editable={editable} style={{ marginVertical: 8 }} />
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', height: 56, marginVertical: 8 }}>
                <View style={{ flex: 0.5, backgroundColor: '#d9d9d9', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 4, marginRight: 8 }}>
                    <Text variant="headlineSmall">{carrinho.length}</Text>
                    <Text variant="bodySmall">Produtos</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#d9d9d9', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                    <Text variant="headlineSmall">R$ {total.toFixed(2)}</Text>
                    <Text variant="bodySmall">Total a Pagar</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => { handleFinalizar() }} style={{ height: 56, backgroundColor: '#4CAF50', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text variant="headlineMedium">Realizar Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Finalizar;