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

export default function App() {
  return (
    <SafeAreaProvider>
      <Registrar/>
    </SafeAreaProvider>
  );
}