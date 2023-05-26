import { MaterialIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Color from "../style/Color";
import { UseContextHook } from "../store/context/ContextProvider";
const windowWidth = Dimensions.get("window").width;
const ImageUpload = () => {
  let { image, setImage } = UseContextHook();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("setImage", setImage);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View width={windowWidth}>
      {image ? (
        image && (
          <View style={design.centered}>
            <MaterialIcons
              name="highlight-remove"
              size={30}
              style={design.removeIcon}
              onPress={removeImage}
            />
            <Image
              source={{ uri: image }}
              style={{
                width: 300,
                height: 350,
                borderRadius: "20%",
                margin: "10%",
                borderWidth: 0.8,
                borderColor: Color.color1,
              }}
            />
            <Text style={design.smallText}>Happy?</Text>
          </View>
        )
      ) : (
        <View style={design.centered}>
          <View style={design.square}>
            <MaterialIcons
              name="add-a-photo"
              size={60}
              color={Color.myBgColor}
              onPress={pickImage}
            />
          </View>
          <Text style={design.smallText}>
            1/3 Share your fav pic to connect with like-minded active friends!
          </Text>
        </View>
      )}
    </View>
  );
};

const design = StyleSheet.create({
  smallText: {
    color: Color.color2,
    textAlign: "center",
    fontFamily: "Quicksand_500Medium",
    fontSize: 18,
    maxWidth: 300,
    marginBottom: 0,
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
    // borderWidth: "1px",
    justifyContent: "center",
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 100 / 2,
    // backgroundColor: { color },
    borderWidth: 3,
    borderColor: Color.fontBodyColor,
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "10%",
    marginBottom: "10%",
    // borderWidth: "1px",
  },
  container: {
    width: "100%",
    // justifyContent: "center",
    // textAlign: "center",
    // textJustify: "center",
    alignItems: "center",
    justifyItems: "center",
    // borderWidth: 7,
  },
  square: {
    width: 300,
    height: 350,
    borderRadius: 100 / 2,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.color3,

    margin: "10%",
  },
  removeIcon: {
    color: Color.myBgColor,
    position: "absolute",
    zIndex: 10,

    transform: [{ translateX: 125 }, { translateY: -158 }],
    textShadowRadius: 3,
    textShadowColor: "#969D95",
  },
});

export default ImageUpload;
