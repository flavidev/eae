import { Amplify } from "aws-amplify";
import { Authenticator, translations } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import { dict } from "./utils/translations";
import { components} from "./utils/authenticator";
import awsExports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import background from "./assets/images/background.png";
import "./App.css";

import { Main } from "./pages/Main.js";


Amplify.configure(awsExports);

export default function App() {
  I18n.putVocabularies(translations);
  I18n.putVocabularies(dict);
  I18n.setLanguage("pt");

  return (
    <main style={styles.container} >
      <Authenticator  components={components}>
        {({ signOut, user }) => <Main signOut={signOut} user={user} />}
      </Authenticator>
    </main>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
