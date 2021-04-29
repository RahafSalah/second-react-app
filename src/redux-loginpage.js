import React from "react";
import { Field, reduxForm } from "redux-form";
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please Enter Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])(?=.{8,20})"
  );

  if (!values.password || values.password.length === 0) {
    errors.password = "Please Enter Password";
  } else if (!strongRegex.test(values.password)) {
    errors.password =
      "Password must be 8-20 characters with at least one number, uppercase letter, lowercase letter, and one special character";
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const LoginForm = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component={renderField}
            type="Password"
            placeholder="password"
          />
        </div>
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login",
  validate,
})(LoginForm);
