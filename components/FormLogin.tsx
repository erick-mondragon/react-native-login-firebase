import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { ButtonForm, InputForm } from "./ui";

import { signin } from "../services";

const initialValues = () => ({
  email: "",
  password: "",
});

const validationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("Introduce un email válido")
      .required("Email es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });
};

export default function FormLogin() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const { email, password } = formValue;
      try {
        const response = await signin(email, password);
        if (response.success) {
          router.replace("/(app)/main");
        } else {
          // Handle login error
          console.log("Login failed:", response.error);
        }
      } catch (error) {
        // Handle unexpected errors
        console.log("Unexpected error:", error);
      }
    },
  });

  return (
    <View style={styles.container}>
      <InputForm
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope", color: "#4c5eff" }}
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        errorMessage={formik.errors.email}
      />
      <InputForm
        placeholder="Password"
        secureTextEntry
        leftIcon={{ type: "font-awesome", name: "lock", color: "#4c5eff" }}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        errorMessage={formik.errors.password}
      />
      <ButtonForm title="INICIAR SESIÓN" onPress={formik.handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
});
