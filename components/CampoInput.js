import { TextInput } from "react-native-paper";

const CampoInput = (props) => {
    if (props.editable) {
        corBorda = 'green'
    } else {
        corBorda = '#000'
    }
    return (
        <TextInput
            mode="outlined"
            onChangeText={props.onChangeText}
            label={props.label}
            value={props.value}
            editable={props.editable}
            keyboardType={props.keyboardType}
            outlineStyle={{ borderColor: corBorda, borderRadius: 8 }} 
            style={props.style}
            />
    );
}

export default CampoInput;