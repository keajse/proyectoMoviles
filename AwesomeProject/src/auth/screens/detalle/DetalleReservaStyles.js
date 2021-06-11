import { StyleSheet, Dimensions } from 'react-native'

const DetalleReservaStyles = StyleSheet.create({
   
    container:{
        flex: 1,
        justifyContent: 'center'
        
    },
    containerImage:{
        alignItems: 'center',
        
    },
    containerUserData:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    
    },
    button:{
        flex: 1,
        flexDirection: "row"
    },
    opciones:{
        flex: 1,
        marginLeft: 10,
        marginRight: 20,
        backgroundColor: "#F3671C",
        alignItems: "center",
        height: 30,
        justifyContent: "center",
        borderRadius: 20
    }

})

export default DetalleReservaStyles;