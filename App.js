import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProdutoProvider from './contexts/ProdutoContext';
import CarrinhoProvider from './contexts/CarrinhoContext';
import { PaperProvider } from 'react-native-paper';
import DesejosProvider from './contexts/DesejosContext';
import PerfilProvider from './contexts/PerfilContext';
import AuthProvider from './contexts/AuthContext';
import MainNavigation from './routes/MainNavigation';
import PedidosProvider from './contexts/PedidosContext';

export default function App() {

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ProdutoProvider>
          <CarrinhoProvider>
            <DesejosProvider>
              <AuthProvider>
                <PerfilProvider>
                  <PedidosProvider>
                    <MainNavigation />
                  </PedidosProvider>
                </PerfilProvider>
              </AuthProvider>
            </DesejosProvider>
          </CarrinhoProvider>
        </ProdutoProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}