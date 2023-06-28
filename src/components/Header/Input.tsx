import { StyleProp, TextInput, TextStyle, View } from "react-native"
import TextButton from "./TextButtom"
import TextFieldStyle from "../../styles/TextField.style"
import HomeStyle from "../../styles/Home.style"


interface IPropsTextFild {
    placeHolder? : string
    style? : StyleProp<TextStyle>
}

const TextField : React.FC<IPropsTextFild> = ({placeHolder, style}) => {
    return (
        <View style={HomeStyle.Input}>
            <TextInput
                style={style}
                placeholder={placeHolder}
            />
            <TextButton label="#" onClick={()=>{console.log('Clicou !')}}/>
        </View>
    )
}

export default TextField