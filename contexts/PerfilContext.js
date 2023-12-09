import { createContext, useState } from 'react';
import { incluir, listarPeloEmail, alterar } from '../services/PerfilService';

const PerfilContext = createContext();

const PerfilProvider = ({ children }) => {
    const [dados, setDados] = useState({
        id: '',
        email: '',
        nome: '',
        telefone: '',
        cep: '',
        endereco: '',
        complemento: ''
    })

    const criarPerfil = async (email, nome) => {
        try {
            const novoPerfil = await incluir(email, nome)
            setDados(novoPerfil)
        } catch (error) {
            console.log(error)
        }
    }

    const buscarPerfil = async (email) => {
        try {
            const listaAtualizada = await listarPeloEmail(email)
            setDados(listaAtualizada)
        } catch (error) {
            console.log(error)
        }
    }

    const editarPerfil = async (id, email, nome, telefone, cep, endereco, complemento) => {
        try {
            const listaAtualizada = await alterar(id, email, nome, telefone, cep, endereco, complemento)
            setDados(listaAtualizada)
        } catch (error) {

        }
    }

    return (
        <PerfilContext.Provider value={{ dados, setDados, criarPerfil, buscarPerfil, editarPerfil }}>
            {children}
        </PerfilContext.Provider>
    );
};

export default PerfilProvider;
export { PerfilContext };
