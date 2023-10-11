import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

const Login = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#388E3C', paddingHorizontal: 16 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="displayLarge" style={{ fontWeight: 'bold', textShadowColor: '#fff', textShadowRadius: 16 }}>
                    Meu App
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <TextInput label={'Email'} style={{ marginBottom: 8 }} />
                <TextInput label={'Senha'} />
            </View>
            <View style={{ flex: 0.6 }}>
                <Button onPress={()=>navigation.navigate('Catalogo')} mode="outlined" buttonColor="#4CAF50" textColor="#000" style={{ borderColor: '#000', borderRadius: 8 }} labelStyle={{ fontSize: 16 }}>Entrar</Button>
            </View>
            <View style={{ flex: 0.4 }}>
                <Button onPress={()=>navigation.navigate('Registrar')} mode="outlined" buttonColor="#4CAF50" textColor="#000" style={{ borderColor: '#000', borderRadius: 8, marginBottom: 8 }} labelStyle={{ fontSize: 16 }}>
                    Não tem uma conta? Registre-se
                </Button>
                <Button onPress={()=>navigation.navigate('Catalogo')} mode="outlined" buttonColor="#f0f0f0" textColor="#000" style={{ borderColor: '#000', borderRadius: 8 }} labelStyle={{ fontSize: 16 }}>
                    Entrar com o Google
                </Button>
            </View>
        </View>
    );
}

export default Login;