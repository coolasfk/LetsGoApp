import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import ActionButton from "./ActionButton";
import style from "../style/Style";
import BackArrow from "../components/BackArrow";
import Color from "../style/Color";

import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { UseContextHook } from "../store/context/ContextProvider";
const windowWidth = Dimensions.get("window").width;

const RegisterSignUp = ({ cta, onPress, navigation }) => {
  const windowWidth = Dimensions.get("window").width;

  console.log(windowWidth);
  let { image } = UseContextHook();
  let [steps, setSteps] = useState(0);
  let [actionBtnOpacity, setActionButtonOpacity] = useState(0.3)

  const moveToNextScreen = () => {
    if (steps === 0) {
      setSteps(windowWidth * 2);
    } else if (steps === windowWidth * 2) {
      setSteps(windowWidth * 4);
    }
  };
  const goBack = () => {
    navigation.navigate("WelcomeScreen");
  };

  return (
    <View style={style.screenLayout1}>
      <View style={design.backArrowPosition}>
        <BackArrow onPress={goBack} />
      </View>

      <View style={design.container}>
        <Text style={[style.headline, { marginTop: 2 }]}>
          Craft your profile to match with your new sporty buddies.
        </Text>

        {/* <View style={[design.scrollContainer, { marginRight: steps }]}> */}
        <View style={[design.scrollContainer, { marginRight: steps }]}>
          <View style={design.horizontalScroll}>
            <ImageUpload width={windowWidth} />

            <View
              width={windowWidth}
              height={windowWidth + 20}
              backgroundColor="blue"
            ></View>
            <View
              width={windowWidth}
              height={windowWidth + 20}
              backgroundColor="pink"
            ></View>
          </View>
        </View>
        <ActionButton
          // opacity={image ? 1 : 0.3}
          opacity={actionBtnOpacity}
          cta={"next"}
          onPress={moveToNextScreen}
          
        ></ActionButton>
      </View>
    </View>
  );
};
const color = () => {
  let color = Color.fontBodyColor;
  return color;
};
const design = StyleSheet.create({
  smallText: {
    color: Color.color2,
    textAlign: "center",
    fontFamily: "Quicksand_500Medium",
    fontSize: 18,
    maxWidth: 300,
    marginBottom: 100,

  },
  backArrowPosition: {
    width: "100%",
    alignContent: "left",
    marginLeft: "10%",
    
  },
  centered: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",

    justifyContent: "center",
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 100 / 2,
    backgroundColor: { color },
    borderWidth: 3,
    borderColor: Color.fontBodyColor,
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  container: {
    width: "100%",

    alignItems: "center",
    justifyItems: "center",
  },
  scrollContainer: {
    backgroundColor: "red",
    height: windowWidth + 20,
    marginBottom: 80,

    // marginRight: 100,
    // overflow: "hidden",
    // justifyItems: "left",
    // alignItems: "left",

    // transform: [{ translateX: windowWidth }],
  },
  horizontalScroll: {
    // justifyItems: "left",
    // alignItems: "left",
    width: windowWidth,
    flexDirection: "row",
  },
});

export default RegisterSignUp;
