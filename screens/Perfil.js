import { View, ScrollView, TouchableOpacity } from "react-native";
import TituloTela from "../components/TituloTela";
import CampoInput from "../components/CampoInput";
import { Text } from "react-native-paper";
import { useState } from "react";

const Perfil = ({route}) => {
    const { dados, handlers } = route.params;
    const [editable, setEditable] = useState(false)

    if (editable) {
        botao = <><View style={{ height: 56, backgroundColor: '#81C784', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
            <Text variant="headlineMedium">Salvar</Text>
        </View></>
    } else {
        botao = <><View style={{ height: 56, backgroundColor: '#d9d9d9', borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
            <Text variant="headlineMedium">Editar Dados</Text>
        </View></>
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <TituloTela titulo='Meu Perfil' />
                <ScrollView contentContainerStyle={{flex:1,paddingBottom:8}}>
                    <View style={{ flex:1, marginHorizontal: 16, marginTop: 8, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
                        <View style={{ padding: 8, flex: 1 }}>
                            <CampoInput label='Nome' value={route.params.dados.nome} editable={editable} onChangeText={route.params.handlers.handleNome} />
                            <CampoInput label='Email' value={route.params.dados.email} editable={editable} onChangeText={route.params.handlers.handleEmail} keyboardType='email-address' />
                            <CampoInput label='Telefone' value={route.params.dados.telefone} editable={editable} onChangeText={route.params.handlers.handleTelefone} keyboardType='phone-pad' />
                            <CampoInput label='CEP' value={route.params.dados.cep} editable={editable} onChangeText={route.params.handlers.handleCep} keyboardType='numeric' />
                            <CampoInput label='Endereco' value={route.params.dados.endereco} editable={editable} onChangeText={route.params.handlers.handleEndereco} />
                            <CampoInput label='Complemento' value={route.params.dados.complemento} editable={editable} onChangeText={route.params.handlers.handleComplemento} />
                        </View>
                        <TouchableOpacity onPress={() => { setEditable(!editable) }} style={{ flexDirection: 'column-reverse', margin: 8 }}>
                            {botao}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default Perfil;