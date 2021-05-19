import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
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
        marginTop: 15,
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})

export default Styles;