import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";

const CardDesejo = (props) => {
    return (
        <View style={{ flexDirection: 'row', minHeight: 72, maxHeight: 72, backgroundColor: '#f0f0f0', padding: 8, marginBottom: 8, borderRadius: 8 }}>
            <View style={{ height: 56, width: 56, backgroundColor: '#d9d9d9', borderRadius: 8, marginRight: 4, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                <Text variant='labelSmall'>{props.img}</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#d9d9d9', borderRadius: 8, marginRight: 4, marginLeft: 4, paddingLeft: 4, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text variant="bodySmall">{props.nome} </Text>
            </View>
            <View style={{ flex: 0.15, borderRadius: 8, marginLeft: 4, marginRight: 4, alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'cart-plus'} iconColor="green" onPress={() => { }} />
            </View>
            <View style={{ flex: 0.15, borderRadius: 8, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'close'} iconColor="red" onPress={() => { }} />
            </View>
        </View>
    );
}

export default CardDesejo;