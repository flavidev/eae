import { View, Image, Text } from "@aws-amplify/ui-react";
import logo from "../assets/images/logo-white-circle.png";

export const components = {
  Header() {
    return (
      <View
        style={{
          textAlign: "center",
        }}
      >
        <Image
          alt="Amplify logo"
          src={logo}
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
          }}
          className="bounce-in-top"
        />
      </View>
    );
  },
  Footer() {
    return (
      <View textAlign="center">
        <Text fontSize="0.75em" color="white">
          &copy; Desenvolvido por All Access Consultoria Ltda.
        </Text>
      </View>
    );
  },
};

export const formFields = {
  signIn: {
    username: {
      placeholder: "Digite o seu email",
    },
  },
  signUp: {
    password: {
      label: "Senha:",
      placeholder: "Digite sua senha",
      isRequired: false,
      order: 1,
    },
    confirm_password: {
      label: "Confirmar senha:",
      placeholder: "Confirme sua senha",
      order: 2,
      isRequired: true,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  resetPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};
