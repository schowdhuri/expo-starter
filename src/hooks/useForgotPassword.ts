import { useMutation } from "react-query";
import { Routes } from "@constants/routes";
import { forgotPassword } from "@services/auth";
import { useNavigation } from "./useNavigation";
import { useToastMessage } from "./useToastMessage";

interface Variables {
  email: string;
}

export function useForgotPassword() {
  const navigation = useNavigation();
  const toast = useToastMessage();

  return useMutation(async (variables: Variables) => {
    await forgotPassword(variables);
    toast.show({
      status: "success",
      title: "Password reset email sent",
      description: "Please check your inbox",
    });
    navigation.navigate(Routes.Login);
  });
}
