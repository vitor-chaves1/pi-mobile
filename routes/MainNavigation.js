import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { AuthContext } from '../contexts/AuthContext';
import Login from '../screens/Login';
import Registrar from '../screens/Registrar';
import Catalogo from '../screens/Catalogo';
import Produto from '../screens/Produto';
import Carrinho from '../screens/Carrinho';
import Historico from '../screens/Historico';
import ListaDesejos from '../screens/ListaDesejos';
import Perfil from '../screens/Perfil';
import Finalizar from '../screens/Finalizar';
import Navbar from '../components/Navbar';

const Stack = createStackNavigator();

const MainNavigation = () => {
    const { usuario } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: (props) => <Navbar {...props} /> }}>
                {!usuario.logado ? (
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Registrar" component={Registrar} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Catalogo" component={Catalogo} />
                        <Stack.Screen name="Produto" component={Produto} />
                        <Stack.Screen name="Carrinho" component={Carrinho} />
                        <Stack.Screen name="Historico" component={Historico} />
                        <Stack.Screen name="ListaDesejos" component={ListaDesejos} />
                        <Stack.Screen name="Perfil" component={Perfil} />
                        <Stack.Screen name="Finalizar" component={Finalizar} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;