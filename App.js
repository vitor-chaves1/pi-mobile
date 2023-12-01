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
import ProdutoProvider from './contexts/ProdutoContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();


export default function App() {


  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ProdutoProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Catalogo" screenOptions={{ header: (props) => <Navbar {...props} /> }}>
              <Stack.Screen name="Catalogo" component={Catalogo} />
              <Stack.Screen name="Produto" component={Produto} />
              <Stack.Screen name="Carrinho" component={Carrinho} />
              <Stack.Screen name="Historico" component={Historico} />
              <Stack.Screen name="ListaDesejos" component={ListaDesejos} />
              <Stack.Screen name="Perfil" component={Perfil} />
              <Stack.Screen name="Finalizar" component={Finalizar} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Registrar" component={Registrar} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </ProdutoProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}