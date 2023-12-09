import { useState, createContext } from 'react';

const CarrinhoContext = createContext();

const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [produtos, setProdutos] = useState([])
    const [total, setTotal] = useState(0)

    const adicionar = (nome, preco, imagem) => {
        if (carrinho.length != 0) {
            const ultimoItem = carrinho[carrinho.length - 1]
            var ultimoId = ultimoItem.id
        } else {
            var ultimoId = 0
        }

        const carrinhoNovo = { id: ultimoId + 1, nome, preco, imagem };
        setCarrinho([...carrinho, carrinhoNovo]);
        setTotal(total + carrinhoNovo.preco)
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
        const produto = buscar(id)
        const listaAtualizada = carrinho.filter((carrinho) => carrinho.id !== id);
        setCarrinho(listaAtualizada);
        setTotal(total - produto.preco)
    };

    const listaProdutos = () => {
        const listaAtualizada = []
        for (produto in carrinho) {
            listaAtualizada.push(carrinho[produto].nome)
        }
        setProdutos(listaAtualizada)
        return produtos
    }

    const limparCarrinho = () => {
        setCarrinho([])
        setProdutos([])
        setTotal(0)
    }

    return (
        <CarrinhoContext.Provider
            value={{ carrinho, adicionar, buscar, atualizar, remover, total, produtos, listaProdutos, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export default CarrinhoProvider;
export { CarrinhoContext };
