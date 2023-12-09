import { ScrollView } from "react-native";
import ItemPedido from "./ItemPedido";

const Pedido = (props) => {
    const lista = []
    let cont = 0
    props.produtos.forEach(item => {
        cont++
        lista.push({ id: cont, produto: item })
    });
    return (
        <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f0f0f0', padding: 8, paddingTop: 0, marginBottom: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }}>
            {lista.map((item) => (
                <ItemPedido key={item.id} id={item.id} produto={item.produto}/>
            ))}
        </ScrollView>
    );
}

export default Pedido;