import { View } from "react-native";
import { Text, IconButton } from 'react-native-paper'

const CardProduto = () => {
    return (
        <View style={{ flex: 1, minHeight: 160, backgroundColor: '#f0f0f0', margin: 8,marginTop:4,marginBottom:4, borderRadius: 8, flexDirection: 'row' }}>
            <View style={{ marginRight: 8 }}>
                <View style={{ height: 125, width: 125, backgroundColor: '#d9d9d9', marginTop: 8, marginLeft: 8, borderRadius: 8 }}>
                    <Text>img</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text variant={"labelSmall"}>(avaliacao)</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 8, marginRight: 8, marginBottom: 8, flexDirection: 'column', }}>
                <View style={{ backgroundColor: '#d9d9d9', height: 88, marginBottom: 8, borderRadius: 8, paddingStart:8 }}>
                    <Text variant={"titleMedium"}>Nome produto </Text>
                </View>
                <View style={{ backgroundColor: '#d9d9d9', justifyContent: 'space-between', alignItems: 'center', height: 48, borderRadius: 8, flex: 1,flexDirection:'row' }}>
                    <View style={{paddingStart: 8}}>
                        <Text variant={"titleLarge"}>R$ 12345,67</Text>
                    </View>
                    <View>
                        <IconButton
                            icon="heart-plus-outline"
                            size={24}
                            onPress={() => { }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CardProduto;