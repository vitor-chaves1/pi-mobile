import { View, Text } from "react-native";
import CardProduto from "../components/CardProduto";
import { IconButton } from "react-native-paper";
import TituloTela from "../components/TituloTela";

const Catalogo = () => {
    return (
        <View>
            <TituloTela titulo={"Catálogo de Produtos"} />
            <View>
                <CardProduto />
                <CardProduto />
            </View>
        </View>
    );
}

export default Catalogo;