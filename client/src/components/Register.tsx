import React from "react";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import * as yup from 'yup'

interface FormValues {
  displayName:  string;
  email: string;
  password: string;


}
const userSchema = yup.object({
    displayName: yup.string().required(),
    // email: yup.string().matches()
})

const Register = (props: FormValues) => {
  return <div>login</div>;
};

export default Register;
