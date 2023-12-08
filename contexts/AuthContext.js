import { createContext, useState } from 'react';
import { signIn, signUp } from '../services/AuthService';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({ email: null, logado: false });
    const [error, setError] = useState();

    const login = async (email, senha) => {
        try {
            await signIn(email, senha);
            setUsuario({ email, logado: true });
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const logout = () => {
        setUsuario({ email: null, logado: false });
    };

    const register = async (nome, email, senha) => {
        try {
            await signUp(nome, email, senha);
            setUsuario({ email, logado: true });
            setError(null);
        } catch (error) {
            console.log(error)
            setError(error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ usuario, error, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
