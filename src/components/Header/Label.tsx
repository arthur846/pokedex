import React from "react"
import { StyleProp, TextStyle, View, Text, Image } from "react-native"
import TextFieldStyle from "../../styles/TextField.style"

interface IPropsTextLabel {
    titleText : string
    img? : string
    styleText : StyleProp<TextStyle>
}

const TextLabel : React.FC<IPropsTextLabel> = ({titleText, styleText})=> {
    return (
        <View style={TextFieldStyle.container}>
            <Image
                style={TextFieldStyle.ImgHeader}
                source={{
                    uri:"https://www.pngkit.com/png/full/19-190666_pokeball-graphic-by-maratuna-on-deviantart-banner-free.png"
                }}
            /> 
            <Text style={styleText}>{titleText}</Text>            
        </View>
    )
}

export default TextLabel