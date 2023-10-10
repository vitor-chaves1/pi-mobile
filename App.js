import { SafeAreaProvider } from 'react-native-safe-area-context';
import Catalogo from './screens/Catalogo';
import Navbar from "./components/Navbar";
import Produto from './screens/Produto';
import Carrinho from './screens/Carrinho';
import Historico from './screens/Historico';
import ListaDesejos from './screens/ListaDesejos';
import Perfil from './screens/Perfil';
import Login from './screens/Login';
import Registrar from './screens/Registrar';
import Finalizar from './screens/Finalizar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();


export default function App() {
  const [nome, setNome] = useState('Nome do Cliente Aqui')
  const [email, setEmail] = useState('email@email.com')
  const [telefone, setTelefone] = useState('+55 061 98765-4321')
  const [cep, setCep] = useState('12345-678')
  const [endereco, setEndereco] = useState('Endereco do Cliente Aqui')
  const [complemento, setComplemento] = useState('Apartamento 123')

  dados = { nome, email, telefone, cep, endereco, complemento }

  handleNome = (text) => setNome(text)
  handleEmail = (text) => setEmail(text)
  handleTelefone = (text) => setTelefone(text)
  handleCep = (text) => setCep(text)
  handleEndereco = (text) => setEndereco(text)
  handleComplemento = (text) => setComplemento(text)

  handlers = { handleNome, handleEmail, handleTelefone, handleCep, handleEndereco, handleComplemento }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Catalogo" screenOptions={{ header: (props) => <Navbar {...props} /> }}>
            <Stack.Screen name="Catalogo" component={Catalogo} />
            <Stack.Screen name="Produto" component={Produto} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
            <Stack.Screen name="Historico" component={Historico} />
            <Stack.Screen name="ListaDesejos" component={ListaDesejos} />
            <Stack.Screen name="Perfil" component={Perfil} initialParams={{ dados: dados, handlers: handlers }} />
            <Stack.Screen name="Finalizar" component={Finalizar} initialParams={{ dados: dados, handlers: handlers }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registrar" component={Registrar} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}