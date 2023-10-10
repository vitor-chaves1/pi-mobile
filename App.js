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

export default function App() {
  const [nome, setNome] = useState('Nome do Cliente Aqui')
  const [email, setEmail] = useState('email@email.com')
  const [telefone, setTelefone] = useState('+55 061 98765-4321')
  const [cep, setCep] = useState('12345-678')
  const [endereco, setEndereco] = useState('Endereco do Cliente Aqui')
  const [complemento, setComplemento] = useState('Apartamento 123')

  dados = { nome, email, telefone, cep, endereco, complemento }
  handlers = { handleNome, handleEmail, handleTelefone, handleCep, handleEndereco, handleComplemento }

  handleNome = (text) => setNome(text)
  handleEmail = (text) => setEmail(text)
  handleTelefone = (text) => setTelefone(text)
  handleCep = (text) => setCep(text)
  handleEndereco = (text) => setEndereco(text)
  handleComplemento = (text) => setComplemento(text)

  return (
    <SafeAreaProvider>
      <Navbar />
      <Perfil dados={dados} handlers={handlers} />
    </SafeAreaProvider>
  );
}