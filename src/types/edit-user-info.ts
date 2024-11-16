import * as yup from "yup";
import editUserInfoSchema from "../schema/user-info";
type EditUserInfoFormValues = yup.InferType<typeof editUserInfoSchema>;

export default EditUserInfoFormValues;
