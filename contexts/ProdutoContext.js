import { createContext } from 'react';
import produtos from '../assets/Produtos.json'

const ProdutoContext = createContext();

const ProdutoProvider = ({ children }) => {
  const findProduto = (id) => {
    return produtos.find((produto) => produto.id === id);
  };

  return (
    <ProdutoContext.Provider value={{ produtos, findProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export default ProdutoProvider;
export { ProdutoContext };
