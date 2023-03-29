import { View, Image } from "@aws-amplify/ui-react";
import logo from "../assets/images/logo-white-circle.png";

export const Loading = () => {
    return (
        <View style={styles.loadingContainer}>
        <Image src={logo} alt="logo" style={styles.loadingImage} /> 
        </View>
    );
    }

const styles = {
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loadingImage: {
        width: "50vw",
        height: "50vw",
        //make image rotate clockwise direction
        animation: "spin 2s linear infinite",
        animationDirection: "reverse",
        

    },
};

