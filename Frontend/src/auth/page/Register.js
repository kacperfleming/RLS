import useCustomForm from "../../hooks/use-form";

const REGISTER_FIELDS = [
    {
        label: 'nazwa użytkownika',
        type: 'text',
        minLenght: 3,
        maxLength: 20,
        required: true
    },
    {
        label: 'hasło',
        type: 'password',
        minLenght: 8,
        maxLength: 24,
        required: true
    }
];

const Register = props => {
    const {form} = useCustomForm({inputs: REGISTER_FIELDS, title: 'Rejestracja', buttonText: 'Zarejestruj mnie', url: 'register', method: 'POST', auth: false});

    return form;
}

export default Register;