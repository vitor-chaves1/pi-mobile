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

const buscar = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/Pedidos/data.json`);
        const pedidos = response.data
        let historico = []
        let idHistorico = 0
        for (const item in pedidos) {
            const perfil_Id = pedidos[item].perfil.id
            if (perfil_Id === id) {
                idHistorico++
                const itemHistorico = { id: idHistorico, produtos: pedidos[item].produtos, preco: pedidos[item].preco }
                historico.push(itemHistorico)
            }
        }
        return historico
    } catch (error) {
        console.log(error)
    }
}

export { incluir, buscar };
