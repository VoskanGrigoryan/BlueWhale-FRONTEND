import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";
// import Input from "./base/Input";

const PasswordField = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <TextField
        {...props}
        {...field}
        fullWidth
        size="small"
        margin="normal"
        type="password"
        variant="standard"
      />
      <ErrorMessage name={props.name} />
    </>
  );
};

export default PasswordField;
