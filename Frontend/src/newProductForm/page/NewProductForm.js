import useCustomForm from "../../hooks/use-form";

const FORM_FIELDS = [
    {
        label: 'nazwa produktu',
        type: 'text',
        minLength: 2,
        maxLength: 24,
        required: true
    },
    {
        label: 'opis produktu',
        type: 'text',
        multiline: true,
        minRows: 4,
        maxRows: 4,
        minLength: 8,
        maxLength: 128,
        required: true
    },
    {
        label: 'ilość',
        type: 'number',
        min: 1,
        required: true
    },
    {
        label: 'cena jednostkowa',
        type: 'number',
        min: 0.5,
        required: true
    },
]

const NewOffer = props => {

    const {form, data} = useCustomForm({inputs: FORM_FIELDS, title: 'Dodaj produkt do oferty', buttonText: 'DODAJ PRODUKT DO OFERTY', url: 'add-product', method: 'POST', auth: true});

    return form;
}

export default NewOffer;