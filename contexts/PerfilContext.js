import { createContext, useState } from 'react';

const PerfilContext = createContext();

const PerfilProvider = ({ children }) => {
    const [dados, setDados] = useState({
        nome: '',
        telefone: '',
        cep: '',
        endereco: '',
        complemento: ''
    })

    return (
        <PerfilContext.Provider value={{ dados, setDados }}>
            {children}
        </PerfilContext.Provider>
    );
};

export default PerfilProvider;
export { PerfilContext };
