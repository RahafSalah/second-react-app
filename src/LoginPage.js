import React from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";

const validateLogin = (loginData) => {
  const errors = {};

  if (!loginData.email) {
    errors.email = "Please Enter Email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!loginData.password || loginData.password.length === 0) {
    errors.password = "Please Enter Password";
  } else if (loginData.password.length < 6) {
    errors.password = "Password must contain at least 6 characters";
  }
  return errors;
};

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const pageStyle = {
    padding: 20,
    width: "30%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Paper style={pageStyle}>
      <div>
        <Grid container spacing={6} direction="column">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={formik.values.email}
              fullWidth
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
          </Grid>

          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="password"
              label="Password"
              type="password"
              value={formik.values.password}
              fullWidth
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {(formik.errors.password && formik.touched.password)? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            ) : null}
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: "50px" }}>
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default LoginPage;
