import React from "react";
import TextField from "../../common/omponents/TextField/TextField";
import { Formik } from "formik";
import * as yup from "yup";
import DateField from "../../common/omponents/DateField/DateFiled";
import Button from "@mui/material/Button";

const SignUp = () => {
  let schema = yup.object().shape({
    firstName: yup
      .string()
      .required("This field is required!")
      .min(2, "Not a valid name!"),
    email: yup
      .string()
      .required("This field is required!")
      .email("Not a valid email!"),
    mobNo: yup
      .string()
      .required("This field is required!")
      .min(10, "The mobile number must be 10 digits!")
      .max(10, "The mobile number must be 10 digits!"),
    day: yup.string().required("Please select valid day!"),
    month: yup.string().required("Please select valid month!"),
    year: yup.string().required("Please select valid year!"),
    password: yup.string().required("Please set a password!"),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <div className="w-full">
      <div className={`w-full}`}>
        <p className="font-roboto font-bold text-2xl mb-5">Sign Up</p>
        <div className={`w-full`}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              mobNo: "",
              email: "",
              password: "",
              day: "",
              month: "",
              year: "",
              confirm_password: "",
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                {console.log(touched, errors, values, "touched")}
                <TextField
                  label="First Name"
                  name="firstName"
                  className="w-full"
                  value={values.firstName}
                  touched={touched.firstName}
                  error={errors.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextField
                  label="Last Name"
                  className="w-full"
                  name="lastName"
                  value={values.lastName}
                  touched={touched.lastName}
                  error={errors.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  label="Email"
                  name="email"
                  className="w-full"
                  value={values.email}
                  touched={touched.email}
                  error={errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  label="Mobile Number"
                  name="mobNo"
                  className="w-full"
                  value={values.mobNo}
                  touched={touched.mobNo}
                  error={errors.mobNo}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <DateField
                  day_value={values.day}
                  day_error={errors.day}
                  day_touched={touched.day}
                  day_name="day"
                  month_value={values.month}
                  month_error={errors.month}
                  month_touched={touched.month}
                  month_name="month"
                  year_value={values.year}
                  year_error={errors.year}
                  year_touched={touched.year}
                  year_name="year"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <TextField
                  label="Password"
                  name="password"
                  className="w-full"
                  value={values.password}
                  touched={touched.password}
                  error={errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                />
                <TextField
                  label="Confirm Password"
                  name="confirm_password"
                  className="w-full"
                  value={values.confirm_password}
                  touched={touched.confirm_password}
                  error={errors.confirm_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                />
                <div className="table mx-auto">
                  <Button variant="contained" className="px-20">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
