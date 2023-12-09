import { ScrollView, View } from "react-native";
import TituloTela from "../components/TituloTela";
import CardHistorico from "../components/CardHistorico";
import { useContext, useEffect } from "react";
import { PedidosContext } from "../contexts/PedidosContext";
import { PerfilContext } from "../contexts/PerfilContext";

const Historico = () => {
    const { historico, buscarHistorico } = useContext(PedidosContext)
    const { dados } = useContext(PerfilContext)
    useEffect(() => {
        buscarHistorico(dados.id)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <TituloTela titulo='Historico de Compras' />
            <ScrollView style={{ flex: 1 }}>
                {historico.map((item) => {
                    return (
                        <CardHistorico key={item.id} numero={item.id} quantidade={item.produtos.length} preco={item.preco} produtos={item.produtos}/>
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default Historico;