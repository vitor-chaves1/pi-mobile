import { SafeAreaProvider } from 'react-native-safe-area-context';
import Catalogo from './screens/Catalogo';
import Navbar from "./components/Navbar";
import Produto from './screens/Produto';
import Carrinho from './screens/Carrinho';
import Historico from './screens/Historico';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navbar />
      <Historico />
    </SafeAreaProvider>
  );
}