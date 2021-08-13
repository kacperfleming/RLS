import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Paper,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    minWidth: 300,
    maxWidth: 600,
    margin: "0 auto",
    padding: "10px 0",
    position: 'relative'
  },
  title: {
    marginBottom: 20,
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  field: {
    marginBottom: 10,
    width: '40vw',
    minWidth: 280,
    maxWidth: 500
  },
}));

const useCustomForm = ({ inputs, title, buttonText, url, method, auth }) => {
  const styles = useStyles();

  const [data, setData] = useState();
  const [error, setError] = useState();
  const token = useSelector((state) => state.auth.token);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
      console.log(data);
    axios({
      url: `${process.env.REACT_APP_BACKEND}/${url}`,
      method,
      data,
      headers: auth && { 'Authorization': `Bearer ${token}` },
    })
      .then((response) => {
        if (response.status.ok) {
          setData(response.data);
        } else {
          setError(response.error.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  console.log(errors);

  return {
    data,
    error,
    form: (
      <Paper className={styles.root}>
        <Typography component="h2" variant="h5" className={styles.title}>
          {title}
        </Typography>

        <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
          {inputs.map((formField) => (
            <Controller
              key={formField.label}
              name={formField.label}
              control={control}
              defaultValue=""
              rules={{
                minLength: formField.type === "text" && formField.minLength || null,
                maxLength: formField.type === "text" && formField.maxLength || null,
                min: formField.type === "number" && formField.min || null,
                max: formField.type === "number" && formField.max || null,
              }}
              render={({ field }) => (
                <TextField
                  label={formField.label}
                  select={formField.type === "select"}
                  required={formField.required}
                  error={errors[formField.label]}
                  helperText={
                    (errors[formField.label]?.type === "minLength" &&
                      `This field requires at least ${formField.minLength} characters.`) ||
                    (errors[formField.label]?.type === "maxLength" &&
                      `This field can be only ${formField.maxLength} characters long.`) ||
                    (errors[formField.label]?.type === "min" &&
                      `Minimum number is ${formField.min}.`) ||
                    (errors[formField.label]?.type === "max" &&
                      `Maximum number is ${formField.max}.`)
                    || ''
                  }
                  type={formField.type}
                  multiline={!!formField.multiline}
                  minRows={4}
                  minRows={formField.multiline && formField.minRows}
                  maxRows={formField.multiline && formField.maxRows}
                  variant="outlined"
                  size="small"
                  className={styles.field}
                  {...field}
                >
                  {formField.type === "select" &&
                    formField.options.map((option, i) => (
                      <MenuItem key={i} value={i}>
                        {option}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            />
          ))}

          <Button type="submit" variant="contained" style={{ outline: "none" }}>
            {buttonText || 'SUBMIT'}
          </Button>
        </form>
      </Paper>
    ),
  };
};

export default useCustomForm;
