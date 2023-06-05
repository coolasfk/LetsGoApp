import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Color from "../style/Color";
import { UseContextHook } from "../store/context/ContextProvider";
import Style from "../style/Style";
import React from "react";

const DATA = [
  {
    id: 22292,
    name: "Eva",
    age: "18",
    sports: ["snowboarding", "hiking"],
    image: "image goes here",
    location: ["longitude", "latitute"],
    colorStars1: Color.color1,
    colorStars2: Color.color1,
    colorStars3: Color.color1,
    colorStars4: Color.color1,
    colorStars5: Color.color1,
    colorStars6: Color.color1,
  },
  {
    id: 22445,
    name: "Beata",
    age: "39",
    sports: ["snowboarding", "hiking"],
    image: "image goes here",
    location: ["longitude", "latitute"],
    colorStars1: Color.color1,
    colorStars2: Color.color1,
    colorStars3: Color.color1,
    colorStars4: Color.color1,
    colorStars5: Color.color1,
    colorStars6: Color.color1,
  },
  {
    id: 2092,
    name: "Stefan",
    age: "28",
    sports: ["snowboarding", "hiking"],
    image: "image goes here",
    location: ["longitude", "latitute"],
    colorStars1: Color.color1,
    colorStars2: Color.color1,
    colorStars3: Color.color1,
    colorStars4: Color.color1,
    colorStars5: Color.color1,
    colorStars6: Color.color1,
  },
];
const Item = ({
  id,
  name,
  age,
  sports,
  image,
  location,
  colorStars1,
  colorStars2,
  colorStars3,
  colorStars4,
  colorStars5,
  colorStars6,
  title,
}) => (
  <View style={styles.mainContainer}>
    <Image
      source={{ uri: image }}
      style={{
        width: 300,
        height: 300,
        borderRadius: 10,
        margin: 35,
        borderWidth: 0.8,
        borderColor: Color.color1,
      }}
    />
    <View style={styles.containerYesNo}>
      <View style={styles.no}>
        <AntDesign name="close" size={24} color="black" />
      </View>
      <View style={styles.yes}>
        <AntDesign name="check" size={24} color="black" />
      </View>
    </View>
    <View>
      <Text style={Style.headline}>
        {name}, {age}
      </Text>

      <View style={styles.sportContainer}>
        <View style={styles.sport}>
          <Text style={styles.text}>snowboarding</Text>
          <View style={styles.stars}>
            <AntDesign name="star" margin={1} size={16} color={Color.color1} />
            <AntDesign name="star" margin={1} size={16} color={Color.color1} />
            <AntDesign name="star" margin={1} size={16} color={Color.color1} />
          </View>
        </View>
        <View style={styles.sport}>
          <Text style={styles.text}>surfing</Text>
          <View style={styles.stars}>
            <AntDesign name="star" margin={1} size={16} color={Color.color1} />
            <AntDesign name="star" margin={1} size={16} color={Color.color1} />
            <AntDesign name="star" margin={1} size={16} color={Color.color1} />
          </View>
        </View>
      </View>
    </View>
  </View>
);
const SingleUserComponent = (onPress, cta) => {
  let { image } = UseContextHook();
  const message = () => {
    console.log("message");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item name={item.name} age={item.age} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sport: {
    opacity: 1,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.fontBodyColor,
    // borderWidth: 2,
    marginRight: 4,
    marginLeft: 4,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 20,
  },
  text: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 18,
    color: Color.color1,
    // borderWidth: 1,
  },
  stars: {
    flexDirection: "row",
    marginLeft: 20,
  },
  mainContainer: {
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "red",
  },
  sportContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  yes: {
    width: 50,
    height: 50,
    borderWidth: 2,
    flexDirection: "row",
    margin: 10,
    borderRadius: 50,
    borderColor: Color.color2,
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    borderWidth: 3,
  },
  no: {
    width: 50,
    height: 50,
    borderWidth: 2,
    flexDirection: "row",
    margin: 10,
    borderRadius: 50,
    borderColor: Color.fontBodyColor,
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    borderWidth: 3,
  },
  containerYesNo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default SingleUserComponent;
