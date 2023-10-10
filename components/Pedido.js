import { View } from "react-native";
import ItemPedido from "./ItemPedido";

const Pedido = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f0f0f0', padding: 8, paddingTop: 0, marginBottom: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }}>
            <ItemPedido qtd={2} produto={'Nome produto 1'} preco={'R$ 12345,67'} />
            <ItemPedido qtd={3} produto={'Nome produto 2'} preco={'R$ 12345,67'} />
            <ItemPedido qtd={2} produto={'Nome produto 3'} preco={'R$ 12345,67'} />
        </View>
    );
}

export default Pedido;