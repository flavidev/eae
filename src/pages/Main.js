import { View } from "@aws-amplify/ui-react";

import { Header } from "../pages/Header";
import { Body } from "../pages/Body";
import { Footer } from "../pages/Footer";

export const Main = (props) => {
  const { signOut, user } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header style={styles.header} />
      </View>
        <View style={styles.bodyContainer}>
          <Body style={styles.body} signOut={signOut} user={user} />
        </View>
        <View style={styles.footerContainer}>
          <Footer>Footer</Footer>
      </View>
    </View>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    flex: 2,
  },
  bodyContainer: {
    display: "flex",
    flex: 5,
  },
  footerContainer: {
    display: "flex",
    flex: 1,
  },

};
