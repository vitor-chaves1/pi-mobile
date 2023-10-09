import { SafeAreaProvider } from 'react-native-safe-area-context';
import Catalogo from './screens/Catalogo';
import Navbar from "./components/Navbar";
import Produto from './screens/Produto';
import Carrinho from './screens/Carrinho';
import Historico from './screens/Historico';
import ListaDesejos from './screens/ListaDesejos';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navbar />
      <ListaDesejos />
    </SafeAreaProvider>
  );
}