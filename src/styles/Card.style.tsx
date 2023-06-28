import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
    container: {
        margin: 15,
        marginEnd: 10,
        width: 90,
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    subContainer: {
        height: 52,
        width: "100%",
        marginTop: 30,
        marginLeft: -15,
        borderTopEndRadius:5,
        borderTopStartRadius:5,
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: '#EFEFEF',
    },
    Code: {
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 12,
        marginLeft: 30,
        marginTop: 2,
    },
    Name: {
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 12,
        marginRight: 9,
        marginTop: 5,
    },
    Img: {
        marginTop: 5,
        marginRight: 9,
        width: 50,
        height: 50,
        zIndex: 1,
    },
})

export default CardStyle