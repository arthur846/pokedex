import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    cardRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
    },
    header: {
        borderRadius: 20,
        marginTop: 50,
        height: 110,
        width: 375,
        paddingLeft: 12,
    },
    subContainer: {
        flex: 1,
        borderRadius: 20,
        marginTop: 30,
        width: 375,
        paddingLeft: 12,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    Input: {
        flexDirection: 'row',
        marginEnd: 60,
    },
})

export default HomeStyle