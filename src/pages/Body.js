import { View, Text } from "@aws-amplify/ui-react";

export const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text>Body</Text>
    </View>
  );
}

const styles = {
  bodyContainer: {
    display: "flex",
    width: "95vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
};
