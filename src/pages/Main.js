import { Button, View, Text, Image } from "@aws-amplify/ui-react";
import logo from "../assets/images/logo-white-circle.png";

export const Main = (props) => {
  const { signOut, user } = props;
  return (
    <View style={styles.landing}>
      <Image
        src={logo}
        alt="logo"
        style={styles.logo}
      />
      <Button
        style={styles.button}
        onClick={() => {
          console.log(user);
        }}
      >
        <Text color={"#8055a4"}>console.log(user)</Text>
      </Button>
      <Text>{user.username}</Text>
      <Button style={styles.button} onClick={signOut}>
        <Text color={"#8055a4"}>signOut</Text>
      </Button>
    </View>
  );
};

const styles = {
  landing: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  logo: {
    width: "50vw",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#fff",
    color: "#fff",
    width: "200px",
    alignSelf: "center",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
  },
};
