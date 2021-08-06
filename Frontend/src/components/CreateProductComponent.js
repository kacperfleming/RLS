import React, {Component} from "react";
import ProductService from "../services/ProductService";


class CreateProductComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: ' ',
            quantity: ' ',
            price: ' '
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandel.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }


    componentDidMount(){


        if(this.state.id === 'add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({name: product.name,
                    description: product.description,
                    quantity: product.quantity,
                    price: product.price
                });
            });
        }
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name, description: this.state.description,
            quantity: this.state.quantity, price: this.state.price };
        console.log('product => ' + JSON.stringify(product));


        if(this.state.id === 'add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === 'add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Nazwa: </label>
                                        <input placeholder="Product Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Opis: </label>
                                        <input placeholder="opis" name="name" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Ilość: </label>
                                        <input placeholder="ilość" name="name" className="form-control"
                                               value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Cena: </label>
                                        <input placeholder="cena" name="name" className="form-control"
                                               value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Zapisz</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Anuluj</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateProductComponent