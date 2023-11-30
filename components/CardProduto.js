import { TouchableOpacity, View } from "react-native";
import { Text, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const CardProduto = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Produto')}} style={{ flex: 1, minHeight: 140, backgroundColor: '#f0f0f0', margin: 8,marginTop:4,marginBottom:4, borderRadius: 8, flexDirection: 'row' }}>
            <View style={{ marginRight: 8 }}>
                <View style={{ height: 125, width: 125, backgroundColor: '#d9d9d9', marginTop: 8, marginLeft: 8, borderRadius: 8 }}>
                    <Text>img</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 8, marginRight: 8, marginBottom: 8, flexDirection: 'column', }}>
                <View style={{ flex:1.5, backgroundColor: '#d9d9d9', marginBottom: 8, borderRadius: 8, paddingStart:8 }}>
                    <Text variant={"titleMedium"}>Nome produtoNome produtoNome produtoNome produtoNome produtoNome produtoNome produtoNome produtoNome produtoNome produtoNome produto </Text>
                </View>
                <View style={{ flex:1,backgroundColor: '#d9d9d9', justifyContent: 'space-between', alignItems: 'center', borderRadius: 8, flex: 1,flexDirection:'row' }}>
                    <View style={{flex:1,paddingStart: 8,justifyContent:'center'}}>
                        <Text variant={"titleMedium"}>R$ 12345,67</Text>
                    </View>
                    <View style={{flex:0.35,marginRight:8,alignItems:'center'}}>
                        <IconButton
                            icon="heart-plus-outline"
                            size={24}
                            onPress={() => { }}
                            style={{margin:0}}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CardProduto;