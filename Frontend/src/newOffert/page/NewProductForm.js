import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, MenuItem, Paper, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        minWidth: 300,
        maxWidth: 600,
        margin: '0 auto',
        padding: '10px 0'
    },
    title: {
        marginBottom: 20,
        fontWeight: 'bold'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    field: {
        marginBottom: 10,
        minWidth: 300,
    }
}));


const FORM_FIELDS = [
    {
        label: 'name',
        type: 'text',
        minLength: 2,
        maxLength: 24,
        required: true
    },
    {
        label: 'description',
        type: 'text',
        multiline: true,
        minRows: 4,
        maxRows: 4,
        minLength: 8,
        required: true
    },
    {
        label: 'quantity',
        type: 'number',
        min: 2,
        required: true
    },
    {
        label: 'price',
        type: 'number',
        min: 1,
        required: true
    },
]

const NewOffer = props => {
    const styles = useStyles();

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSubmitHandler = () => {}

    console.log(errors);

    return (
        <Paper className={styles.root}>
            <Typography component="h2" variant="h5" className={styles.title}>New Product</Typography>

            <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
                {FORM_FIELDS.map(formField => (
                    <Controller
                        key={formField.label}
                        name={formField.label}
                        control={control}
                        defaultValue=""
                        rules={{minLength: formField.type === 'text' && formField.minLength, maxLength: formField.type === 'text' && formField.maxLength, min: formField.type === 'number' && formField.min, max: formField.type === 'number' && formField.max}}
                        render={({field}) => <TextField label={formField.label} select={formField.type === 'select'} required={formField.required} error={errors[formField.label]} helperText={(errors[formField.label]?.type === 'minLength' && `This field requires at least ${formField.minLength} characters.`) || (errors[formField.label]?.type === 'maxLength' && `This field can be only ${formField.maxLength} characters long.`) || (errors[formField.label]?.type === 'min' && `Minimum number is ${formField.min}.`) || (errors[formField.label]?.type === 'max' && `Maximum number is ${formField.max}.`)} type={formField.type} multiline={!!formField.multiline} minRows={4} minRows={formField.multiline && formField.minRows} maxRows={formField.multiline && formField.maxRows} variant="outlined" size="small" className={styles.field} {...field}>{formField.type === 'select' && formField.options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}</TextField>}/>
                ))}

                <Button type="submit" variant="contained" style={{outline: 'none'}}>ADD NEW PRODUCT</Button>
            </form>

        </Paper>
    )
}

export default NewOffer;