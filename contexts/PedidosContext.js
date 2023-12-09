import { createContext, useState } from 'react';
import { incluir } from '../services/PedidosService';

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
    //const [pedidos, setPedidos] = useState([])

    const criarPedido = async (produtos, preco, perfil) => {
        try {
            await incluir(produtos, preco, perfil)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PedidosContext.Provider value={{ criarPedido }}>
            {children}
        </PedidosContext.Provider>
    );
};

export default PedidosProvider;
export { PedidosContext };
