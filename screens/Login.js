import { ScrollView, View } from "react-native";
import { Text, TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from 'react-hook-form';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { PerfilContext } from "../contexts/PerfilContext";

const Login = ({ navigation }) => {
    const { error, login } = useContext(AuthContext)
    const { buscarPerfil } = useContext(PerfilContext)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        buscarPerfil(data.email)
        login(data.email, data.senha)
    };


    return (
        <View style={{ flex: 1, backgroundColor: '#388E3C', paddingHorizontal: 16, paddingTop: 56 }}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant="displayLarge" style={{ fontWeight: 'bold', textShadowColor: '#fff', textShadowRadius: 16 }}>
                            Meu App
                        </Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Controller
                            control={control}
                            rules={{
                                required: { value: true, message: 'Email obrigatorio' },
                                pattern: {
                                    value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                                    message: 'Email no formato invalido',
                                },
                            }}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    keyboardType="email-address"
                                    label="E-mail"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="email"
                        />
                        <HelperText type="error" visible={errors.email} style={{ color: '#821901' }}>
                            {errors.email ? errors.email.message : ''}
                        </HelperText>
                        <Controller
                            control={control}
                            rules={{
                                required: { value: true, message: 'Senha obrigatoria' },
                                minLength: {
                                    value: 6,
                                    message: 'A senha deve conter no minimo 6 caracteres',
                                },
                            }}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    secureTextEntry={true}
                                    label="Senha"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="senha"
                        />
                        <HelperText type="error" visible={errors.senha} style={{ color: '#821901' }}>
                            {errors.senha ? errors.senha.message : ''}
                        </HelperText>
                        <HelperText type="error" visible={true} style={{ color: '#821901' }} >
                            {error}
                        </HelperText>
                    </View>
                </View>
                <View>
                    <Button onPress={handleSubmit(onSubmit)} mode="outlined" buttonColor="#4CAF50" textColor="#000" style={{ borderColor: '#000', borderRadius: 8, marginBottom: 8 }} labelStyle={{ fontSize: 16 }}>
                        Entrar
                    </Button>
                </View>
                <View>
                    <Button onPress={() => {
                        navigation.navigate('Registrar')
                    }}
                        mode="outlined" buttonColor="#4CAF50" textColor="#000" style={{ borderColor: '#000', borderRadius: 8, marginBottom: 8 }} labelStyle={{ fontSize: 16 }}>
                        Não tem uma conta? Registre-se
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}

export default Login;