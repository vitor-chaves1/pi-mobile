import { View, ScrollView, TouchableOpacity } from "react-native";
import TituloTela from "../components/TituloTela";
import CampoInput from "../components/CampoInput";
import { Text } from "react-native-paper";
import { useState } from "react";

const Perfil = () => {
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
                <ScrollView >
                    <View style={{ flex: 1, marginHorizontal: 16, marginTop: 8, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
                        <View style={{ padding: 8, flex: 1 }}>
                            <CampoInput label='Nome' value={''} editable={editable} onChangeText={() => { }} />
                            <CampoInput label='Email' value={''} editable={editable} onChangeText={() => { }} keyboardType='email-address' />
                            <CampoInput label='Telefone' value={''} editable={editable} onChangeText={() => { }} keyboardType='phone-pad' />
                            <CampoInput label='CEP' value={''} editable={editable} onChangeText={() => { }} keyboardType='numeric' />
                            <CampoInput label='Endereco' value={''} editable={editable} onChangeText={() => { }} />
                            <CampoInput label='Complemento' value={''} editable={editable} onChangeText={() => { }} />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => { setEditable(!editable) }} style={{ flexDirection: 'column-reverse', margin: 8 }}>
                    {botao}
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Perfil;