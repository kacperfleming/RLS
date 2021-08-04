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
            optionNeedOffer: '',
            offerCategory: '',
            offerArea: '',
            offerReason: ''

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
                    offerrorGroup: offer.offerrorGroup,
                    description: offer.description,
                    optionNeedOffer: offer.optionNeedOffer,
                    offerCategory: offer.offerCategory,
                    offerArea: offer.offerArea,
                    offerReason: offer.offerReason,
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
            offerrorGroup: this.state.offerrorGroup,
            description: this.state.description,
            optionNeedOffer: this.state.optionNeedOffer,
            offerCategory: this.state.offerCategory,
            offerArea: this.state.offerArea,
            offerReason: this.state.offerReason

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
        this.setState({offerrorGroup: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeOptionHandler= (event) => {
        this.setState({optionNeedOffer: event.target.value});
    }
    changeCategoryHandler= (event) => {
        this.setState({offerCategory: event.target.value});
    }
    changeAreaHandler= (event) => {
        this.setState({offerArea: event.target.value});
    }
    changeReasonHandler= (event) => {
        this.setState({offerReason: event.target.value});
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
                                        <br/>
                                        <select value={this.state.offerrorGroup} onChange={this.changeOfferorGroupHandler}>

                                            <option value="0" >Psycholodzy i terapeuci</option>
                                            <option value="1" >Społeczność</option>
                                            <option value="2">Właściciele domów</option>
                                            <option value="3">Właściciele mieszkań</option>
                                            <option value="4">Najemncy domów i mieszkań</option>
                                            <option value="5">Urzędy i instytucje</option>
                                            <option value="6">Przedsiębiorcy</option>
                                            <option value="7">Seniorzy</option>
                                            <option value="8">Młodzież</option>
                                            <option value="9">Rodzice</option>
                                            <option value="10">Rolnicy</option>
                                            <option value="11">Pracownicy</option>
                                            <option value="12">Studenci</option>
                                            <option value="13">Wykładowcy i naukowcy</option>
                                            <option value="14">Rektorzy</option>
                                            <option value="15">Dyrektorzy_szkół</option>
                                            <option value="16">Organizacje_pozarządowe</option>
                                            <option value="17">Osoby_bezrobotne</option>
                                            <option value="18">Osoby_niepełnosprawne</option>
                                            <option value="19">Inna_grupa</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Krótki opis usługi: </label>
                                        <input placeholder="description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Opcja: </label>
                                        <input placeholder="option" name="optionNeedOffer" className="form-control"
                                               value={this.state.optionNeedOffer} onChange={this.changeOptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Kategoria: </label>
                                        <input placeholder="category" name="offerCategory" className="form-control"
                                               value={this.state.offerCategory} onChange={this.changeCategoryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Obszar: </label>
                                        <input placeholder="area" name="offerArea" className="form-control"
                                               value={this.state.offerArea} onChange={this.changeAreaHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <label> Dlaczego to robisz?: </label>
                                    <input placeholder="reason" name="offerReason" className="form-control"
                                           value={this.state.offerReason} onChange={this.changeReasonHandler}/>
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