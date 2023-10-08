import { SafeAreaProvider } from 'react-native-safe-area-context';
import Catalogo from './screens/Catalogo';

export default function App() {
  return (
    <SafeAreaProvider>
      <Catalogo></Catalogo>
    </SafeAreaProvider>
  );
}