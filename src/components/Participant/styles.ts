import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 40,
        backgroundColor: "#222",
        borderRadius: 10,
        padding: 10,
        marginRight: 20,
        marginBottom:20,
    },
    name:{
        color:'#fff',
        fontWeight:'semibold',
        fontSize:16,
    },
    button: {
        width:40,
        height:40,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#ff0000",
        borderRadius: 10,
    
      },
      buttonText: {
        fontSize:30,
        color: "#fff",
      },
      list:{
        marginTop:10,
        width:'100%',
        flexDirection:"row"
      },
});