import * as yup from "yup";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("To'ldirishingiz shart!"),
  lastName: yup.string().required("To'ldirishingiz shart!"),
  email: yup
    .string()
    .required("To'ldirishingiz shart!")
    .email("Email kiritishingiz shart!"),
  password: yup.string().required("To'ldirishingiz shart!"),
  prePassword: yup.string().required("To'ldirishingiz shart!"),
  birthDate: yup.string().required("To'ldirishingiz shart!"),
});

export default registerSchema;
