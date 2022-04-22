import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const UserIDField = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <TextField
        {...props}
        {...field}
        size="small"
        fullWidth
        type="text"
        margin="normal"
        variant="standard"
        autoFocus
      />
      <ErrorMessage name={props.name} />
    </>
  );
};

export default UserIDField;
