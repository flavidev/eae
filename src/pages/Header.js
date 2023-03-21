import { View, Text, Image } from "@aws-amplify/ui-react";

import avatar from "../assets/images/profile-picture.png";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image src={avatar} alt="logo" style={styles.avatar} />
      </View>
      <View style={styles.userdataContainer}>
        <Text style={{fontFamily:"Azonix"}}>Username</Text>
        <Text>Points</Text>
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    // a container for the avatar and userdata
    display: "flex",
    flexDirection: "row",
    width: "95vw",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    // a round white container for the avatar
    display: "flex",
    borderRadius: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "40vw",
    height: "40vw",
  },
  avatar: {
    borderRadius: "50%",
    width: "37.5vw",
    height: "37.5vw",
  },
  userdataContainer: {
    // a container for the username and points
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
  },
};
