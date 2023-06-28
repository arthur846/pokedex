import React from "react"
import { StyleProp, TextStyle, View, Text, Image } from "react-native"
import CardStyle from "../../styles/Card.style"


interface IPropsCard {
    code : string
    name : string
    url : string
    style? : StyleProp<TextStyle>
}

const Card : React.FC<IPropsCard> = ({ code, name, url, style}) => {
    return (
        <View style={CardStyle.container}>
            <Text style={CardStyle.Code}>{code}</Text>
            <View>
                <Image
                    style={CardStyle.Img}
                    source={{
                        uri:url
                    }}
                />
                <View style={CardStyle.subContainer}>
                </View>
            </View>
            <Text style={CardStyle.Name}>{name}</Text>
        </View>
    )
}

export default Card