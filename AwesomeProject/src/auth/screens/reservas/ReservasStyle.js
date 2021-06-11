import { StyleSheet, Dimensions } from 'react-native'

const ReservasStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    icontainer: {
        flex: 1,
        backgroundColor: "#F3671C",
        borderBottomLeftRadius: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40
    },
    inputDataContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: "center",

    },
    inputDataUser: {
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        marginTop: 8,
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    title:{
        position: "absolute",
        right: 30,
        bottom: 50,
        fontSize: 18,
        color: "#FFFFFF",
    
    }
})

export default ReservasStyles;