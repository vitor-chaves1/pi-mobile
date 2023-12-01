import { useState, createContext } from 'react';

const DesejosContext = createContext();

const DesejosProvider = ({ children }) => {
    const [desejos, setDesejos] = useState([]);

    const adicionarDesejo = (nome, imagem, produtoId) => {
        if (desejos.length != 0) {
            const ultimoItem = desejos[desejos.length - 1]
            var ultimoId = ultimoItem.id
        } else {
            var ultimoId = 0
        }

        const desejosNovo = { id: ultimoId + 1, nome, imagem, produtoId };
        setDesejos([...desejos, desejosNovo]);
    };

    const buscarDesejo = (id) => {
        return desejos.find((desejos) => desejos.id === id);
    };

    const removerDesejo = (id) => {
        const listaAtualizada = desejos.filter((desejos) => desejos.id !== id);
        setDesejos(listaAtualizada);
    };

    return (
        <DesejosContext.Provider
            value={{ desejos, adicionarDesejo, buscarDesejo, removerDesejo }}>
            {children}
        </DesejosContext.Provider>
    );
};

export default DesejosProvider;
export { DesejosContext };