import { View, Text, Image, StyleSheet, Button } from "react-native";
import Color from "../style/Color";
import { useState } from "react";
import { UseContextHook } from "../store/context/ContextProvider";
import BackArrow from "../components/BackArrow";
import SingleUserComponent from "./SingleUserComponent";

import Style from "../style/Style";

const FindBuddy = ({ navigation }) => {
  let {
    location,
    setLocation,
    userLocation,
    setUserLocation,
    newCity,
    setCity,
    setCityText,
    cityText,
  } = UseContextHook();

  let { image } = UseContextHook();
  let name = "Eva";
  const getBack = () => {
    navigation.navigate("RegisterSignUp");
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 350,
          width: 100,
          height: 100,
        }}
      >
        <BackArrow onPress={getBack} />
      </View>
      <View>
        <Text style={[Style.headline, { marginTop: 100 }]}>
          Hey, {name}! Let's go!
        </Text>
      </View>
      <View style={styles.yourProfile}>
        <Image
          source={{ uri: image }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            margin: 35,
            borderWidth: 0.8,
            borderColor: Color.color1,
          }}
        />
        <Text>Your {newCity}</Text>
        <Text>My sports: snowboarding & hiking</Text>
        {/* <Button title="update your location" onPress={letsgo}></Button> */}
      </View>

      <View>
        <SingleUserComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.myBgColor,
    alignItems: "center",

    // justifyContent: "center",
    justifyItems: "center",
    height: "100%",
  },
  welcomeText: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 16,
    color: Color.fontBodyColor,
  },
  yourProfile: {
    borderWidth: "1px",
    width: "100%",
    flexDirection: "row",
    justifyItems: "center",
    marginTop: 20,

    marginLeft: 20,
    marginRight: 20,
  },
});
export default FindBuddy;
