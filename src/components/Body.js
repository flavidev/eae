import { View, Button } from "@aws-amplify/ui-react";

export const Body = (props) => {
  const { user, signOut, loading } = props;

  return (
    <View style={styles.bodyContainer}>
      <Button
        onClick={() => {
          console.log(user);
        }}
      >
        user
      </Button>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        signOut
      </Button>
      <Button
        onClick={() => {
          loading(true);
          setTimeout(() => {
            loading(false);
          }, 1000);
        }}
      >
        loading
      </Button>
    </View>
  );
};

const styles = {
  bodyContainer: {
    display: "flex",
    width: "95vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
