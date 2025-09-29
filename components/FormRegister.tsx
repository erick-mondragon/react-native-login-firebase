import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { ButtonForm, InputForm } from "./ui";

import { signup } from "../services";

const initialValues = () => ({
  name: "",
  email: "",
  password: "",
});

const validationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Introduce un email válido")
      .required("Email es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });
};

export default function FormRegister() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const { name, email, password } = formValue;
      try {
        const response = await signup(name, email, password);
        if (response.success) {
          router.replace("/(app)/main");
        } else {
          // Handle registration error
          console.log("Registration failed:", response.error);
        }
      } catch (error) {
        console.log("Error occurred during registration:", error);
      }
    },
  });

  return (
    <View style={styles.container}>
      <InputForm
        placeholder="Nombre Completo"
        leftIcon={{ type: "font-awesome", name: "user", color: "#4c5eff" }}
        value={formik.values.name}
        onChangeText={formik.handleChange("name")}
        errorMessage={formik.errors.name}
      />
      <InputForm
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope", color: "#4c5eff" }}
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        errorMessage={formik.errors.email}
      />
      <InputForm
        placeholder="Contraseña"
        leftIcon={{ type: "font-awesome", name: "lock", color: "#4c5eff" }}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        errorMessage={formik.errors.password}
        secureTextEntry
      />
      <ButtonForm title="Registrarse" onPress={formik.handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
});
