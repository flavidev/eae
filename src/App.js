import logo from "./assets/images/eae-logo-1.png";
import background from "./assets/images/background.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={styles.container}>
        <img src={logo} style={styles.logo} alt="logo" />
      </div>
    </div>
  );
}

export default App;

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
  logo: {
    height: "100px",
    width: "100px",
  },
};
