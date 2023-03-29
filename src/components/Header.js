import { View, Text, Image } from "@aws-amplify/ui-react";

import avatar from "../assets/images/profile-picture.png";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Image 
        onClick={() => {
          alert("Mudar foto");
        }
        }
        src={avatar} alt="logo" style={styles.avatar} />
      </View>
      <View style={styles.userdataContainer}>
        <Text style={styles.userdataText}>EAE, usuário!</Text>
        <Text style={styles.userdataText}>Status: Ativo</Text>
        <Text style={styles.userdataText}>Créditos: 1</Text>
        <Text style={styles.userdataText}>Plano: plano</Text>
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "95vw",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    borderRadius: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem",
  },
  avatar: {
    borderRadius: "50%",
    width: "30vw",
    height: "30vw",
  },
  userdataContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userdataText: {
    fontFamily: "Azonix",
    fontSize: "1rem",
    color: "#fff",
  },
};
