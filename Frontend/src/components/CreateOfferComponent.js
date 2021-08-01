import React, {Component} from "react";
import OfferService from "../services/OfferService";


class CreateOfferComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            offerCost: ' ',
            isUrgent: ' ',
            offerrorGroup: ' ',
            description: '',
            option: '',
            category: '',
            area: '',
            reason: '',
            payment: '',

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePriceHandler =this.changePriceHandler.bind(this);
        this.changeUrgentHandler = this.changeUrgentHandler.bind(this);
        this.saveOrUpdateOffer = this.saveOrUpdateOffer.bind(this);
        this.changeOfferorGroupHandler = this.changeOfferorGroupHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeOptionHandler = this.changeOptionHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeReasonHandler = this.changeReasonHandler.bind(this);
        this.changePaymentHandler = this.changePaymentHandler.bind(this);
    }


    componentDidMount(){


        if(this.state.id === 'add'){
            return
        }else{
            OfferService.getOfferById(this.state.id).then( (res) =>{
                let offer = res.data;
                this.setState({
                    name: offer.name,
                    offerCost: offer.offerCost,
                    isUrgent: offer.isUrgent,
                    offerorGroup: offer.offerorGroup,
                    description: offer.description,
                    option: offer.option,
                    category: offer.category,
                    area: offer.area,
                    reason: offer.reason,
                    payment: offer.payment,
                });
            });
        }
    }
    saveOrUpdateOffer = (e) => {
        e.preventDefault();
        let offer = {
            name: this.state.name,
            offerCost: this.state.offerCost,
            isUrgent: this.state.isUrgent,
            offerorGroup: this.state.offerorGroup,
            description: this.state.description,
            option: this.state.option,
            category: this.state.category,
            area: this.state.area,
            reason: this.state.reason,
            payment: this.state.payment,

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
        this.setState({offerCost: event.target.value});
    }

    changeUrgentHandler= (event) => {
        this.setState({isUrgent: event.target.value});
    }
    changeOfferorGroupHandler= (event) => {
        this.setState({offerorGroup: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeOptionHandler= (event) => {
        this.setState({option: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    changeAreaHandler= (event) => {
        this.setState({area: event.target.value});
    }
    changeReasonHandler= (event) => {
        this.setState({reason: event.target.value});
    }
    changePaymentHandler= (event) => {
        this.setState({payment: event.target.value});
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
                                        <input placeholder="Cena" name="offerCost" className="form-control"
                                               value={this.state.offerCost} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Pilność</label>
                                        <input placeholder="isUrgent" name="isUrgent" className="form-control"
                                               value={this.state.isUrgent} onChange={this.changeUrgentHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Grupa oferująca: </label>
                                        <input placeholder="offerorGroup" name="offerorGroup" className="form-control"
                                               value={this.state.offerorGroup} onChange={this.changeOfferorGroupHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Krótki opis usługi: </label>
                                        <input placeholder="description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Opcja: </label>
                                        <input placeholder="option" name="option" className="form-control"
                                               value={this.state.option} onChange={this.changeOptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Kategoria: </label>
                                        <input placeholder="category" name="category" className="form-control"
                                               value={this.state.category} onChange={this.changeCategoryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Obszar: </label>
                                        <input placeholder="area" name="area" className="form-control"
                                               value={this.state.area} onChange={this.changeAreaHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <label> Dlaczego to robisz?: </label>
                                    <input placeholder="reason" name="reason" className="form-control"
                                           value={this.state.reason} onChange={this.changeReasonHandler}/>
                            </div>
                                    <div className = "form-group">
                                        <label> Płatność: </label>
                                        <input placeholder="payment" name="payment" className="form-control"
                                               value={this.state.payment} onChange={this.changePaymentHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateOffer}>Zapisz</button>
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

export default CreateOfferComponent