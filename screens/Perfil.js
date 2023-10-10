import { View, ScrollView, TouchableOpacity } from "react-native";
import TituloTela from "../components/TituloTela";
import { Dimensions } from "react-native";
import CampoPerfil from "../components/CampoPerfil";
import { useState } from "react";
import { Text } from "react-native-paper";

const Perfil = () => {
    const windowHeight = Dimensions.get('window').height;
    const [editable, setEditable] = useState(false)
    const [nome, setNome] = useState('Nome do Cliente Aqui')
    const [email, setEmail] = useState('email@email.com')
    const [telefone, setTelefone] = useState('+55 061 98765-4321')
    const [cep, setCep] = useState('12345-678')
    const [endereco, setEndereco] = useState('Endereco do Cliente Aqui')
    const [complemento, setComplemento] = useState('Apartamento 123')

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
        <View style={{ flex: 1 }}>
            <TituloTela titulo='Meu Perfil' />
            <ScrollView>
                <View style={{ marginHorizontal: 16, marginTop: 8, height: windowHeight - 132, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
                    <View style={{ padding: 8 }}>
                        <CampoPerfil label='Nome' value={nome} editable={editable} onChangeText={(text) => setNome(text)} />
                        <CampoPerfil label='Email' value={email} editable={editable} onChangeText={(text) => setEmail(text)} keyboardType='email-address' />
                        <CampoPerfil label='Telefone' value={telefone} editable={editable} onChangeText={(text) => setTelefone(text)} keyboardType='phone-pad' />
                        <CampoPerfil label='CEP' value={cep} editable={editable} onChangeText={(text) => setCep(text)} keyboardType='numeric' />
                        <CampoPerfil label='Endereco' value={endereco} editable={editable} onChangeText={(text) => setEndereco(text)} />
                        <CampoPerfil label='Complemento' value={complemento} editable={editable} onChangeText={(text) => setComplemento(text)} />
                    </View>
                    <TouchableOpacity onPress={() => { setEditable(!editable) }} style={{ flex: 1, flexDirection: 'column-reverse', margin: 8 }}>
                        {botao}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default Perfil;