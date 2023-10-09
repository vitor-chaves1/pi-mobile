import { SafeAreaProvider } from 'react-native-safe-area-context';
import Catalogo from './screens/Catalogo';
import Navbar from "./components/Navbar";
import Produto from './screens/Produto';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navbar />
      <Produto />
    </SafeAreaProvider>
  );
}