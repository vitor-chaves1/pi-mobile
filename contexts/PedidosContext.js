import { createContext, useState } from 'react';
import { incluir, buscar } from '../services/PedidosService';

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
    const [historico, setHistorico] = useState([])

    const criarPedido = async (produtos, preco, perfil) => {
        try {
            await incluir(produtos, preco, perfil)
        } catch (error) {
            console.log(error)
        }
    }

    const buscarHistorico = async (id) => {
        try {
            const dados = await buscar(id)
            setHistorico(dados)
        } catch (error) {

        }
    }
    return (
        <PedidosContext.Provider value={{ criarPedido, historico, buscarHistorico }}>
            {children}
        </PedidosContext.Provider>
    );
};

export default PedidosProvider;
export { PedidosContext };
