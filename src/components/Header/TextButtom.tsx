import React from "react"
import { StyleProp, TextStyle, TouchableOpacity, Text, View} from "react-native"
import TextFieldStyle from "../../styles/TextField.style"

interface IPropsTextButton {
    label : string,
    onClick? : ()=> void
    style? : StyleProp<TextStyle>
}

const TextButton : React.FC<IPropsTextButton> = ({label, onClick, style})=>{
    return (
        <TouchableOpacity style={style} onPress={onClick}>
            <View style={TextFieldStyle.ContainerButton}>
                <Text style={TextFieldStyle.TextButtom}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TextButton