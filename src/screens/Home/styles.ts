import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Define your styles here
  Container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
    padding: 40,
  },
  eventName: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#555",
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#222",
    borderRadius: 10,
    color: "#fff",
    padding: 10,
    marginRight: 20,
    marginBottom:20,
  },
  button: {
    width:40,
    height:40,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#3f3f",
    borderRadius: 10,

  },
  buttonText: {
    
    fontSize:30,
    color: "#222",
  },
  form:{
    marginTop:10,
    width:'100%',
    flexDirection:"row"
  },
  
});
