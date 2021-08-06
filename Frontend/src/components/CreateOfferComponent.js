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

    addProduct (){
        this.props.history.push('/add/addProduct');

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
                                        <label> Krótki opis usługi: </label>
                                        <input placeholder="description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Kategoria: </label>
                                        <br/>
                                        <select value={this.state.offerCategory}
                                                onChange={this.changeCategoryHandler}>
                                            <option value="">Wybierz opcje</option>
                                            <option value="0" >Wspieranie</option>
                                            <option value="1" >Organizacja</option>
                                            <option value="2">Zarabianie</option>
                                            <option value="3" >Kierowanie</option>
                                            <option value="4" >Promowanie</option>
                                            <option value="5">Komunikowanie</option>
                                            <option value="6" >Uświadamianie</option>
                                            <option value="7" >Naprawa</option>
                                            <option value="8">Hodowla</option>
                                            <option value="9" >Poszukiwanie</option>
                                            <option value="10" >Analiza i badania</option>
                                            <option value="11">Pomaganie innym</option>
                                            <option value="12">Budowanie zrozumienia</option>
                                            <option value="13">Dawanie otuchy innym</option>
                                            <option value="14">Łączenie zasobów i możliwości</option>
                                            <option value="15">Przedsiębiorczość</option>
                                            <option value="16">Zarządzanie zasobami</option>
                                            <option value="17">Przywództwo</option>
                                            <option value="18">Uważność</option>
                                            <option value="19">Synergia w działaniu</option>
                                            <option value="21">Uczciwość</option>
                                            <option value="22">Generowanie</option>
                                            <option value="23">Ochrona</option>
                                            <option value="24">Instruktaż</option>
                                            <option value="25">Nabywanie_kompetencji</option>
                                            <option value="26">Umiejętność pracy pod presją czasu</option>
                                            <option value="27">Dbałość o dobrą atmosferę</option>
                                            <option value="28">Rozwiązywanie konfliktów</option>
                                            <option value="29">Motywowanie pracowników</option>
                                            <option value="30">Logiczne myślenie</option>
                                            <option value="31">Motywacja samorozwoju</option>
                                            <option value="32">Obsługa technologii</option>
                                            <option value="33">Porada</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Grupa oferująca: </label>
                                        <br/>
                                        <select value={this.state.offerrorGroup} onChange={this.changeOfferorGroupHandler}>
                                            <option value="">Wybierz opcje</option>
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
                                        <label> Obszar: </label>
                                        <br/>
                                        <select value={this.state.offerArea} onChange={this.changeAreaHandler}>
                                            <option value="">Wybierz opcje</option>
                                            <option value="0" >Świadomość życia</option>
                                            <option value="1" >Natura wokól mnie</option>
                                            <option value="2">Firma i organizacja</option>
                                            <option value="3" >Usługi i wykonastwo</option>
                                            <option value="4" >Relacje z rodziną</option>
                                            <option value="5" >Relacje ze znajomymi</option>
                                            <option value="6">Ścieżka artysty</option>
                                            <option value="7" >Narzędzia i systemy pracy</option>
                                            <option value="8" >Komunikacja online</option>
                                            <option value="9" >Komputer i telefon</option>
                                            <option value="10">Internet i narzedzią</option>
                                            <option value="11" >Komunikacja miejska</option>
                                            <option value="12" >Postrzeganie innych</option>
                                            <option value="13" >Szkoła i rozwój</option>
                                            <option value="14">Świadoma uprawa roślin</option>
                                            <option value="15" >Zwierzęta wokól nas</option>
                                            <option value="16" >Świadome i zdrowe żywienie</option>
                                            <option value="17" >Dbałość o zdrowie</option>
                                            <option value="18" >Pasja i aktywności</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Opcja: </label>
                                        <br/>
                                        <select value={this.state.optionNeedOffer} onChange={this.changeOptionHandler}>
                                            <option value="">Wybierz opcje</option>
                                            <option value="0" >Potrzebuję</option>
                                            <option value="1" >Oferuję</option>
                                            <option value="2">Potrzebuję i oferuję</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                    <label> Dlaczego to robisz?: </label>
                                        <br/>
                                        <select value={this.state.offerReason} onChange={this.changeReasonHandler}>
                                            <option value="">Wybierz opcje</option>
                                            <option value="">Wybierz opcje</option>
                                            <option value="0" >Spokój</option>
                                            <option value="1" >Cierpliwość</option>
                                            <option value="2">Kochanie</option>
                                            <option value="3" >Uwolnienie</option>
                                            <option value="4" >Jednoczenie</option>
                                            <option value="5" >Zaufanie</option>
                                            <option value="6" >Wiedza</option>
                                            <option value="7">Cieszenie się</option>
                                            <option value="8" >Wdzięczność</option>
                                            <option value="9" >Zaopiekowanie</option>
                                            <option value="10" >Kreowanie</option>
                                            <option value="11" >Prawdziwość</option>
                                            <option value="12">Sprawczość</option>
                                            <option value="13" >Komunikowanie</option>
                                            <option value="14" >Odwdzięczenie</option>
                                            <option value="15" >Zadośćuczynienie</option>
                                            <option value="16" >Dawanie_z_serca</option>
                                        </select>
                                        <div className = "form-group">
                                            <label> Pilność</label>
                                            <br/>
                                            <select value={this.state.isUrgent} onChange={this.changeUrgentHandler}>
                                                <option value="">Wybierz opcje</option>
                                                <option value="true" >Pilne</option>
                                                <option value="false" >Niepilne</option>
                                            </select>
                                        </div>
                                            <div className="row">
                                                <button className="btn btn-outline-primary" onClick={this.addProduct}>
                                                    Dodaj produkt do oferty
                                                </button>
                                            </div>
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