import { View, Text } from "react-native";
import CardProduto from "../components/CardProduto";
import Navbar from "../components/Navbar";
import { IconButton } from "react-native-paper";

const Catalogo = () => {
    return (
        <View>
            <Navbar />
            <View style={{ flex: 1, backgroundColor: '#d9d9d9', minHeight: 28, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 4, paddingBottom: 4, marginBottom:4 }}>
                <View style={{ width: '33%', backgroundColor: '#CBCBCB', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                    <IconButton
                        icon="filter-variant"
                        size={20}
                        onPress={() => { }}
                        disabled
                    />
                    <Text style={{ paddingEnd: 16 }}>Filtros</Text>
                </View>
                <View style={{ width: '33%', backgroundColor: '#CBCBCB', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <IconButton
                        icon="sort"
                        size={20}
                        onPress={() => { }}
                        disabled
                    />
                    <Text style={{ paddingEnd: 16 }}>Ordenar</Text>
                </View>
            </View>
            <CardProduto />
            <CardProduto />
        </View>
    );
}

export default Catalogo;