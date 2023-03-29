import { useState} from "react";

import { View } from "@aws-amplify/ui-react";

import {Loading} from "../pages/Loading";

import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";

export const Main = (props) => {
  const { signOut, user } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleSetIsLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading && <Loading/>}

      {!isLoading && (
        <>
          <View style={styles.headerContainer}>
            <Header style={styles.header} />
          </View>
          <View style={styles.bodyContainer}>
            <Body style={styles.body} signOut={signOut} user={user} loading={handleSetIsLoading} />
          </View>
          <View style={styles.footerContainer}>
            <Footer>Footer</Footer>
          </View>
        </>
      )}
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
    flex: 1,
    //    backgroundColor: "#0ff",
  },
  bodyContainer: {
    display: "flex",
    flex: 7,
    backgroundColor: "#fff",
  },
  footerContainer: {
    display: "flex",
    flex: 1,
    //   backgroundColor: "#f0f",
  },
};
