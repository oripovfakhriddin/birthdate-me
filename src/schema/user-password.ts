import * as yup from "yup";

const editUserPasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(4, "Parolingiz kamida 4 ta belgidan iborat bo'lishi kerak!")
    .required("To'ldirishingiz shart!"),
  newPassword: yup
    .string()
    .min(4, "Parolingiz kamida 4 ta belgidan iborat bo'lishi kerak!")
    .required("To'ldirishingiz shart!"),
});

export default editUserPasswordSchema;
