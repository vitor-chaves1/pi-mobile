import { View, ScrollView } from "react-native";
import TituloTela from "../components/TituloTela";
import CardDesejo from "../components/CardDesejo";
import { useContext } from "react";
import { DesejosContext } from "../contexts/DesejosContext";

const ListaDesejos = () => {
    const { desejos } = useContext(DesejosContext)
    return (
        <View style={{ flex: 1 }}>
            <TituloTela titulo='Lista de Desejos' />
            <ScrollView style={{ flex: 1 }}>
                {desejos.map((item) => {
                    return (
                        <CardDesejo key={item.id} itemId={item.id} nome={item.nome} imagem={item.imagem} produtoId={item.produtoId} />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default ListaDesejos;