import { View, ScrollView } from "react-native";
import TituloTela from "../components/TituloTela";
import CardDesejo from "../components/CardDesejo";

const ListaDesejos = () => {
    return (
        <View style={{ flex: 1 }}>
            <TituloTela titulo='Lista de Desejos' />
            <ScrollView>
                <View style={{ marginHorizontal: 16, marginTop: 8 }}>
                    <CardDesejo img='img' nome='nome produto nome produto nome produto nome produto nome produto nome produto '/>
                    <CardDesejo img='img' nome='nome produto nome produto nome produto nome produto nome produto nome produto '/>
                    <CardDesejo img='img' nome='nome produto nome produto nome produto nome produto nome produto nome produto '/>
                </View>
            </ScrollView>
        </View>
    );
}

export default ListaDesejos;