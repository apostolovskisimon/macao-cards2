import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as yup from "yup";
import { FormValues } from "../Register/RegisterComponent";
import { handleLogin } from "../../actions/auth/index";
import { useHistory } from "react-router-dom";
interface Props {}

const LoginComponent = (props: Props) => {
  const history = useHistory();

  const userSchema = yup.object({
    email: yup.string().email().required("Your Email is Required"),
    password: yup.string().required("Password is Required"),
  });

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const onSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ): void => {
    handleLogin(values, history);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <label htmlFor="email">
            {" "}
            Email
            <Field name="email" id="email" type="email" value={values.email} />
            <ErrorMessage name="email" />
          </label>

          <label htmlFor="password">
            {" "}
            Password
            <Field
              name="password"
              id="password"
              type="password"
              value={values.password}
            />
            <ErrorMessage name="password" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginComponent;
