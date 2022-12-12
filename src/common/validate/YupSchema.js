import * as Yup from "yup";
let yup = require("yup");

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("valid require"),
  lastName: Yup.string().required("valid require"),
  address: Yup.string().required("valid require"),
  email: Yup.string()
    .required("valid require")
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "email validate"),
  dateOfBirth: Yup.date().required("valid require"),
  isGraduate: Yup.string().required("A radio option is required"),
  phone: Yup.string()
    .required()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "valid required"
    ),
  school: Yup.string().required("please choose your school"),
  gender: Yup.string().required("please choose your gender"),
  hobby: Yup.array().required("please choose your hobby"),
});
