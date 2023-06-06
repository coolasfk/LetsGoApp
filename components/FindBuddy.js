import { View, Text, Image, StyleSheet, Button } from "react-native";
import Color from "../style/Color";
import { useState } from "react";
import { UseContextHook } from "../store/context/ContextProvider";
import BackArrow from "../components/BackArrow";
import SingleUserComponent from "./SingleUserComponent";
import axios from "axios";
import Style from "../style/Style";
//  fetch("lestgo.coolasfk.repl.co/users")

const backendUrl = "https://lestgo--coolasfk.repl.co/users";
const FindBuddy = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  let fetchUsers = async () => {
    console.log("fetch started");

    try {
      const respose = await axios.get("https://lestgo--coolasfk.repl.co/users");
      let returnedUsers = [];
      console.log(respose.data[0])
      for (let user of respose.data) {
        const tempUser = {
          id: user._id,
          name: user.name,
          location: user.location,
          age: user.age,
          sports: user.sports,
        };
        returnedUsers.push(tempUser);
      }
      console.log(returnedUsers);
      setFetchedUsers(returnedUsers);
    } catch (e) {
      console.log("error fetching");
    }
    //return returnedUsers;
  };

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
      <Image
        source={{ uri: image }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 50,
          marginTop: 80,
          borderWidth: 0.8,
          borderColor: Color.color1,
        }}
      />
      <Text style={[Style.headline, { marginTop: 20 }]}>
        Hey, {name}! Let's go!
      </Text>

      <View onPress={fetchUsers} style={styles.newFriendsContainer}>
        <View style={styles.friendsBtn}>
          <Button
            title="New Friends"
            onPress={fetchUsers}
            style={[Style.smallText, { marginBottom: 0 }]}
          />
        </View>
        <View style={styles.friendsBtn}>
          <Button
            title="Old Friends"
            onPress={fetchUsers}
            style={[Style.smallText, { marginBottom: 0 }]}
          />
        </View>
        <View></View>
      </View>
      <SingleUserComponent users={fetchedUsers} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.myBgColor,
    alignItems: "center",
    width: "100%",

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

    // justifyItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    alignContent: "center",
  },
  newFriendsContainer: {
    flexDirection: "row",
  },

  pressed: {
    opacity: 0.7,
    transform: "translateY(2px)",
  },
  notCompleted: {
    opacity: 0.3,
  },

  friendsBtn: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,

    paddingTop: "3,5%",
    paddingBottom: "3,5%",
    paddingLeft: "10%",
    paddingRight: "10%",
    borderWidth: 3,
    borderRadius: "60%",
    borderColor: "#9E8142",
    marginBottom: "2%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FindBuddy;
