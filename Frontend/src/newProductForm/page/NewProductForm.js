import useCustomForm from "../../hooks/use-form";

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

    const {form, data} = useCustomForm({inputs: FORM_FIELDS, title: 'Add new product', url: 'add-product', method: 'POST', auth: true});

    return form;
}

export default NewOffer;