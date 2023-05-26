import { StyleSheet } from "react-native";
import Color from "./Color";
let marginTop;
const style = StyleSheet.create({
  headline: {
    fontFamily: "Quicksand_500Medium",
   
    maxWidth: 350,
    textAlign: "center",
    fontSize: 30,
    color: "#9E8142",
    marginTop: { marginTop },
    justifyContent: "center",
   
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#C7D8C5",
  },
  screenLayout1: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    backgroundColor: "#C7D8C5",
    borderTopWidth: 50,

    borderColor: Color.myBgColor,
   
  },
  image: {
    width: "59%",
    height: "100%",
  },
  containerForLogo: {
    width: "100%",
    height: "50%",

    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    margin: "10%",
  },
});

export default style;
