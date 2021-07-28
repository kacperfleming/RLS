import React, {Component} from "react";
import OfferService from "../services/OfferService";


class CreateOfferComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
           // offerrorGroup: ' ', //ty chyba powinna być lista, tak jak enum, zamiast ''
           // offerDescription: ' ',//trza podpytac co ma byc a co nie

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePriceHandler =this.changePriceHandler.bind(this);
        this.changeAvailableHandler = this.changeAvailableHandler.bind(this);
        this.saveOrUpdateOffer = this.saveOrUpdateOffer.bind(this);
    }


    componentDidMount(){


        if(this.state.id === 'add'){
            return
        }else{
            OfferService.getOfferById(this.state.id).then( (res) =>{
                let offer = res.data;
                this.setState({name: offer.name,
                   // price: offer.price,
                  //  available: offer.available.toString,
                });
            });
        }
    }
    saveOrUpdateOffer = (e) => {
        e.preventDefault();
        let offer = {name: this.state.name,
            //price: this.state.price,
            //available: this.state.available
        };
        console.log('offer => ' + JSON.stringify(offer));


        if(this.state.id === 'add'){
            OfferService.createOffer(offer).then(res =>{
                this.props.history.push('/');
            });
        }else{
            OfferService.updateOffer(offer, this.state.id).then(res => {
                this.props.history.push('/');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changeAvailableHandler= (event) => {
        this.setState({available: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === 'add'){
            return <h3 className="text-center">Dodaj usługę</h3>
        }else{
            return <h3 className="text-center">Zaktualizuj usługę</h3>
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
                                        <label> Nazwa usługi: </label>
                                        <input placeholder="Nazwa usługi" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Cena: </label>
                                        <input placeholder="Offer Price" price="price" className="form-control"
                                               value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Available</label>
                                        <input placeholder="Available" available="available" className="form-control"
                                               value={this.state.available} onChange={this.changeAvailableHandler}/>
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateOffer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateOfferComponent