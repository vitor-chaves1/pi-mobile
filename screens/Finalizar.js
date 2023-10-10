import { View } from "react-native";
import { Text } from "react-native-paper";
import CampoInput from "../components/CampoInput";

const Finalizar = ({ route }) => {
    const { dados, handlers } = route.params
    editable = false
    return (
        <View style={{ backgroundColor: '#81C784', flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
            <Text variant="titleLarge" style={{ paddingBottom: 8 }}>Confirmar dados</Text>
            <View style={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 16, padding: 8 }}>
                <View style={{ flex: 1 }}>
                    <CampoInput label='Nome' value={route.params.dados.nome} editable={editable} onChangeText={route.params.handlers.handleNome} />
                    <CampoInput label='Email' value={route.params.dados.email} editable={editable} onChangeText={route.params.handlers.handleEmail} keyboardType='email-address' />
                    <CampoInput label='Telefone' value={route.params.dados.telefone} editable={editable} onChangeText={route.params.handlers.handleTelefone} keyboardType='phone-pad' />
                    <CampoInput label='CEP' value={route.params.dados.cep} editable={editable} onChangeText={route.params.handlers.handleCep} keyboardType='numeric' />
                    <CampoInput label='Endereco' value={route.params.dados.endereco} editable={editable} onChangeText={route.params.handlers.handleEndereco} />
                    <CampoInput label='Complemento' value={route.params.dados.complemento} editable={editable} onChangeText={route.params.handlers.handleComplemento} />
                </View>
                <View style={{ flexDirection: 'row', height: 56, marginBottom: 8 }}>
                    <View style={{ flex: 0.5, backgroundColor: '#d9d9d9', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 4, marginRight: 8 }}>
                        <Text variant="headlineSmall">8</Text>
                        <Text variant="bodySmall">Produtos</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#d9d9d9', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                        <Text variant="headlineSmall">R$ 12345,67</Text>
                        <Text variant="bodySmall">Total a Pagar</Text>
                    </View>
                </View>
                <View>
                    <View style={{ height: 56, backgroundColor: '#4CAF50', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="headlineMedium">Realizar Pedido</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Finalizar;