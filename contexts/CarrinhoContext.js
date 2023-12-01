import { useState, createContext } from 'react';

const CarrinhoContext = createContext();

const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionar = (nome, preco, imagem) => {
        if (carrinho.length != 0) {
            const ultimoItem = carrinho[carrinho.length - 1]
            var ultimoId = ultimoItem.id
        } else {
            var ultimoId = 0
        }

        const carrinhoNovo = { id: ultimoId + 1, nome, preco, imagem };
        setCarrinho([...carrinho, carrinhoNovo]);
    };

    const buscar = (id) => {
        return carrinho.find((carrinho) => carrinho.id === id);
    };

    const atualizar = (id, nome, preco) => {
        const carrinhoAtualizado = { id, nome, preco, imagem };
        const listaAtualizada = carrinho.map((carrinho) =>
            carrinho.id === id ? carrinhoAtualizado : carrinho
        );
        setCarrinho(listaAtualizada);
    };

    const remover = (id) => {
        const listaAtualizada = carrinho.filter((carrinho) => carrinho.id !== id);
        setCarrinho(listaAtualizada);
    };

    return (
        <CarrinhoContext.Provider
            value={{ carrinho, adicionar, buscar, atualizar, remover }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export default CarrinhoProvider;
export { CarrinhoContext };
