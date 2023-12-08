import axios from 'axios';

const BASE_URL = 'https://backend-mobile-4ad87-default-rtdb.firebaseio.com';

const incluir = async (email, nome) => {
    try {
        const response = await axios.post(`${BASE_URL}/Perfis/data.json`, {
            email,
            nome,
            telefone: '',
            cep: '',
            endereco: '',
            complemento: ''
        });
        return { id: response.data.name, email, nome, telefone: '', cep: '', endereco: '', complemento: '' };
    } catch (error) {
        console.log(error);
    }
};

const listarPeloEmail = async (email) => {
    try {
        const response = await axios.get(`${BASE_URL}/Perfis/data.json`);
        const perfis = response.data

        for (const perfil_id in perfis) {
            const perfil = perfis[perfil_id]
            if (perfil.email === email) {
                return { id: perfil_id, ...perfil }
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const alterar = async (id, email, nome, telefone, cep, endereco, complemento) => {
    try {
        const response = await axios.put(`${BASE_URL}/Perfis/data/${id}.json`, {
            email,
            nome,
            telefone,
            cep,
            endereco,
            complemento
        });
        return { id, ...response.data };
    } catch (error) {
        console.log(error);
    }
};

export { incluir, listarPeloEmail, alterar };
