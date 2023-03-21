import { View, Text } from "@aws-amplify/ui-react";

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View>
        <Text>Mural</Text>
      </View>
      <View>
        <Text>Aulas</Text>
      </View>
      <View>
        <Text>Configurações</Text>
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
    backgroundColor: "green",
  },
};
