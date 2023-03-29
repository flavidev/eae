import { View, Text } from "@aws-amplify/ui-react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.submenuContainer}
      onClick={() => {
        alert("Mural");
      }}
      >
        <AiOutlineCalendar style={styles.icon}/>
        <Text style={styles.iconText}>Mural</Text>
      </View>
      <View style={styles.submenuContainer}
      onClick={() => {
        alert("Aulas");
      }}
      >
        <BiFootball style={styles.icon}/>
        <Text style={styles.iconText}>Aulas</Text>
      </View>
      <View style={styles.submenuContainer}
      onClick={() => {
        alert("Conta");
      }}
      >
        <VscAccount style={styles.icon}/>
        <Text style={styles.iconText}>Conta</Text>
      </View>
     
    </View>
  );
};

const styles = {
  footerContainer: {
    display: "flex",
    width: "95vw",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  submenuContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontFamily: "Azonix",
    fontSize: "1rem",
    color: "#fff",
  },
  icon: {
    fontSize: "2rem",
    color: "#fff",
  },
};
