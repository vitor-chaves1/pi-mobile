import { ScrollView, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

const Registrar = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#388E3C', paddingHorizontal: 16,paddingTop:56 }}>
            <ScrollView>

                <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                    <Text variant="displayLarge" style={{ fontWeight: 'bold', textShadowColor: '#fff', textShadowRadius: 16 }}>
                        Meu App
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput label={'Nome'} style={{ marginBottom: 8 }} />
                    <TextInput label={'Email'} keyboardType="email-address" style={{ marginBottom: 8 }} />
                    <TextInput label={'Confirmar Email'} keyboardType="email-address" style={{ marginBottom: 8 }} />
                    <TextInput label={'Senha'} secureTextEntry style={{ marginBottom: 8 }} />
                    <TextInput label={'Confirmar Senha'} secureTextEntry />
                </View>
                <View style={{ flex: 0.4 }}>
                    <Button onPress={() => navigation.navigate('Catalogo')} mode="outlined" buttonColor="#4CAF50" textColor="#000" style={{ borderColor: '#000', borderRadius: 8, marginBottom: 8 }} labelStyle={{ fontSize: 16, fontWeight: 'bold' }}>
                        Criar Conta
                    </Button>
                    <Button onPress={() => navigation.navigate('Login')} mode="outlined" buttonColor="#4CAF50" textColor="#000" style={{ borderColor: '#000', borderRadius: 8 }} labelStyle={{ fontSize: 16 }}>
                        Já possui uma conta?
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}

export default Registrar;