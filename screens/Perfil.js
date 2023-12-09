import { View, ScrollView, TouchableOpacity } from "react-native";
import TituloTela from "../components/TituloTela";
import CampoInput from "../components/CampoInput";
import { Text, HelperText } from "react-native-paper";
import { useContext, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { PerfilContext } from "../contexts/PerfilContext";


const Perfil = () => {
    const { dados, editarPerfil } = useContext(PerfilContext)
    const [editable, setEditable] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        editarPerfil(dados.id, dados.email, data.nome, data.telefone, data.cep, data.endereco, data.complemento)
        setEditable(!editable)
    };


    const botaoSalvar = <>
        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={{ flexDirection: 'column-reverse', margin: 8 }}>
            <View style={{ height: 56, backgroundColor: '#81C784', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="headlineMedium">Salvar</Text>
            </View>
        </TouchableOpacity>
    </>

    const botaoEditar = <>
        <TouchableOpacity onPress={() => setEditable(!editable)} style={{ flexDirection: 'column-reverse', margin: 8 }}>
            <View style={{ height: 56, backgroundColor: '#d9d9d9', borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                <Text variant="headlineMedium">Editar Dados</Text>
            </View>
        </TouchableOpacity>
    </>

    return (
        <View style={{ flex: 1 }}>
            <TituloTela titulo='Meu Perfil' />
            <ScrollView >
                <View style={{ flex: 1, marginHorizontal: 16, marginTop: 8, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
                    <View style={{ padding: 8, flex: 1 }}>
                        <Controller
                            control={control}
                            rules={{
                                required: { value: true, message: 'Nome obrigatorio' }

                            }}
                            render={({ field: { value, onChange } }) => (
                                <CampoInput
                                    label="Nome"
                                    editable={editable}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="nome"
                            defaultValue={dados.nome}
                        />
                        <HelperText type="error" visible={errors.nome} style={{ color: '#821901' }}>
                            {errors.nome ? errors.nome.message : ''}
                        </HelperText>
                        <Controller
                            control={control}
                            rules={{
                                required: { value: true, message: 'Telefone obrigatorio' },
                                pattern: {
                                    value:
                                        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
                                    message: 'Telefone invalido',
                                },

                            }}
                            render={({ field: { value, onChange } }) => (
                                <CampoInput
                                    label="Telefone"
                                    editable={editable}
                                    value={value}
                                    onChangeText={onChange}
                                    keyboardType={'phone-pad'}
                                />
                            )}
                            name="telefone"
                            defaultValue={dados.telefone}
                        />
                        <HelperText type="error" visible={errors.telefone} style={{ color: '#821901' }}>
                            {errors.telefone ? errors.telefone.message : ''}
                        </HelperText>
                        <Controller
                            control={control}
                            rules={{
                                required: { value: true, message: 'CEP obrigatorio' },
                                pattern: {
                                    value:
                                        /\d{5}[-.\s]?\d{3}/,
                                    message: 'CEP invalido',
                                },

                            }}
                            render={({ field: { value, onChange } }) => (
                                <CampoInput
                                    label="CEP"
                                    editable={editable}
                                    value={value}
                                    onChangeText={onChange}
                                    keyboardType={'numeric'}
                                />
                            )}
                            name="cep"
                            defaultValue={dados.cep}
                        />
                        <HelperText type="error" visible={errors.cep} style={{ color: '#821901' }}>
                            {errors.cep ? errors.cep.message : ''}
                        </HelperText>
                        <Controller
                            control={control}
                            rules={{
                                required: { value: true, message: 'Endereço obrigatorio' }

                            }}
                            render={({ field: { value, onChange } }) => (
                                <CampoInput
                                    label="Endereço"
                                    editable={editable}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="endereco"
                            defaultValue={dados.endereco}
                        />
                        <HelperText type="error" visible={errors.endereco} style={{ color: '#821901' }}>
                            {errors.endereco ? errors.endereco.message : ''}
                        </HelperText>
                        <Controller
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <CampoInput
                                    label="Complemento"
                                    editable={editable}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="complemento"
                            defaultValue={dados.complemento}
                        />
                    </View>
                </View>
            </ScrollView>
            {editable ? (botaoSalvar) : (botaoEditar)}
        </View>
    );
}

export default Perfil;