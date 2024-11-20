import * as yup from "yup";
import editUserPasswordSchema from "../schema/user-password";
type EditUserPasswordFormValues = yup.InferType<typeof editUserPasswordSchema>;
export default EditUserPasswordFormValues;
