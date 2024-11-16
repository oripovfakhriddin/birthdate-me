import * as yup from "yup";

const editUserInfoSchema = yup.object().shape({
  firstName: yup.string().required("To'ldirishingiz shart!"),
  lastName: yup.string().required("To'ldirishingiz shart!"),
  email: yup
    .string()
    .required("To'ldirishingiz shart!")
    .email("Email kiritilishi shart!"),
  birthDate: yup.string().required("To'ldirishingiz shart!"),
});

export default editUserInfoSchema;
