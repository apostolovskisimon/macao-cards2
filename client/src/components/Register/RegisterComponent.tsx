import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as yup from "yup";
import { handleRegister } from "../../actions/auth";

interface Props {}

export interface FormValues {
  displayName?: string;
  email: string;
  password: string;
}

const RegisterComponent = (props: Props) => {
  const userSchema = yup.object({
    displayName: yup.string().required("Your Display Name is Required"),
    email: yup.string().email().required("Your Email is Required"),
    password: yup.string().required("Password is Required"),
  });

  const initialValues: FormValues = {
    displayName: "",
    email: "",
    password: "",
  };

  const onSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ): void => {
    console.log(values);
    handleRegister(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <Field name="displayName" value={values.displayName} />
            <ErrorMessage name="displayName" />
            <Field name="email" value={values.email} />
            <ErrorMessage name="email" />
            <Field name="password" value={values.password} />
            <ErrorMessage name="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterComponent;
