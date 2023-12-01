import { View, FlatList } from "react-native";
import CardProduto from "../components/CardProduto";
import TituloTela from "../components/TituloTela";
import { ProdutoContext } from '../contexts/ProdutoContext';
import { useContext } from 'react';

const Catalogo = () => {
    const { produtos } = useContext(ProdutoContext);
    return (
        <View>
            <TituloTela titulo={"Catálogo de Produtos"} />
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardProduto nome={item.nome} preco={item.preco} produtoId={item.id} imagem={item.imagem} />
                )}
            />
        </View>
    );
}

export default Catalogo;