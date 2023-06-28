import { StyleSheet } from "react-native";

const TextFieldStyle = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 60,
        width: 350,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    Input: {
        flex: 1,
        marginLeft: 5,
        marginTop: 5,
        fontSize: 30,
        alignItems: 'center',
        width: 280,
        height: 60,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
            width: 40,
            height: 40,
        },
        shadowOpacity: 100,
        shadowRadius: 5,

        elevation: 20,
    },
    Label: {
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        width: 350,
        fontSize: 42,
        borderRadius: 10,
        paddingLeft: 25,
    },
    ImgHeader: {
        width: 50,
        height: 50,
    },
    ContainerButton: {
        marginTop: 8,
        marginLeft: 13,
        marginRight: -50,
        height: 55,
        width: 55,
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
            width: 40,
            height: 40,
        },
        shadowOpacity: 100,
        shadowRadius: 5,

        elevation: 20,
    },
    TextButtom: {
        marginTop: -6,
        paddingLeft: 12,
        fontSize: 50,
        color: '#DC0A2D',
        fontWeight: 'bold',
    },
})

export default TextFieldStyle