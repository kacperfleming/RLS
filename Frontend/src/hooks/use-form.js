import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Paper,
  Button,
  Typography,
  FormHelperText,
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

const useCustomForm = ({ inputs, title, buttonText, helperText, url, method, redirect, auth }) => {
  const styles = useStyles();

  const history = useHistory();

  const [responseData, setResponseData] = useState();
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
          setResponseData(response.data);
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
    responseData,
    error,
    form: (
      <Paper className={styles.root} elevation={0} square>
        <Typography component="h2" variant="h5" className={styles.title}>
          {title}
        </Typography>

        <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
          {inputs.map((formField) => (
            <Controller
              key={formField.label}
              name={formField.fieldName}
              control={control}
              defaultValue=""
              rules={{
                minLength: ((formField.type === "text" || formField.type === 'password' || formField.type === 'email') && formField.minLength) || null,
                maxLength: ((formField.type === "text" || formField.type === 'password' || formField.type === 'email') && formField.maxLength) || null,
                min: (formField.type === "number" && formField.min) || null,
                max: (formField.type === "number" && formField.max) || null,
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
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </form>
      </Paper>
    ),
  };
};

export default useCustomForm;
