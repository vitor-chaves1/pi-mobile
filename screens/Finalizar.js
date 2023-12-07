import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import CampoInput from "../components/CampoInput";
import { useContext } from "react";
import { PerfilContext } from "../contexts/PerfilContext";

const Finalizar = () => {
    const {dados} = useContext(PerfilContext)
    editable = false
    return (
        <View style={{ backgroundColor: '#81C784', flex: 1, paddingHorizontal: 16, paddingVertical: 8 }}>
            <ScrollView>
                <Text variant="titleLarge" style={{ paddingBottom: 8 }}>Confirmar dados</Text>
                <View style={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: 8, padding: 8 }}>
                    <View style={{ flex: 1 }}>
                        <CampoInput label='Nome' value={dados.nome} editable={editable} style={{marginVertical:8}}/>
                        <CampoInput label='Telefone' value={dados.telefone} editable={editable} style={{marginVertical:8}}/>
                        <CampoInput label='CEP' value={dados.cep} editable={editable} style={{marginVertical:8}}/>
                        <CampoInput label='Endereco' value={dados.endereco} editable={editable} style={{marginVertical:8}}/>
                        <CampoInput label='Complemento' value={dados.complemento} editable={editable} style={{marginVertical:8}}/>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', height: 56, marginVertical: 8 }}>
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
    );
}

export default Finalizar;