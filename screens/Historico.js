import { ScrollView, View } from "react-native";
import TituloTela from "../components/TituloTela";
import CardHistorico from "../components/CardHistorico";

const Historico = () => {
    return (
        <View style={{ flex: 1 }}>
            <TituloTela titulo='Historico de Compras' />
            <ScrollView>
                <View style={{ marginHorizontal: 16, marginTop: 8 }}>
                    <CardHistorico />
                    <CardHistorico />
                </View>
            </ScrollView>
        </View>
    );
}

export default Historico;