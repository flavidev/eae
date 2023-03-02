import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import logo from "./assets/images/eae-logo-1.png";
import background from "./assets/images/background.png";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={styles.container}>
          <div style={styles.landing}>
            <img src={logo} style={styles.logo} alt="logo" />
            <button
              onClick={() => {
                console.log(user);
              }}
            >
              Log user
            </button>
            <button onClick={signOut}>Sign out</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  landing: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "100px",
    width: "100px",
  },
};
