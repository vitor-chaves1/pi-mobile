import axios from 'axios';

const BASE_URL = 'https://backend-mobile-4ad87-default-rtdb.firebaseio.com';

const incluir = async (produtos, preco, perfil) => {
    try {
        await axios.post(`${BASE_URL}/Pedidos/data.json`, {
            produtos,
            preco,
            perfil
        });
    } catch (error) {
        console.log(error);
    }
};

export { incluir };
