import React, {Component} from "react";
import OfferService from "../services/OfferService";

class GetAllOffers extends Component{

    constructor(props) {
        super(props);

        this.state ={
            offer: []
        }
        this.addOffer = this.addOffer.bind(this);
        this.editOffer = this.editOffer.bind(this);
        this.deleteOffer = this.deleteOffer.bind(this);
    }

    deleteOffer(id){
        OfferService.deleteOffer(id).then(res => {
            this.setState({offer: this.state.offer.filter(offer => offer.id !== id)});
        });
    }
    viewOffer(id){
        this.props.history.push(`/viewDetails/${id}`);
    }
    componentDidMount() {
        OfferService.getOffers().then((res) => {
            this.setState({
                offer: res.data
                }

            );
        })
    }
    editOffer(id){
        this.props.history.push(`/add/${id}`)

    }

    addOffer (){
        this.props.history.push('/add/add');

    }

    render() {
        return(
            <div>
                <h2 className="text-center">Lista usług</h2>
                <div className="row">
                    <button className="btn btn-outline-primary" onClick={this.addOffer}>
                        Dodaj usługę
                    </button>

                </div>
                <div className="a row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Nazwa </th>
                            <th> Wycena</th>
                            <th> Pilne?</th>
                            <th> Opis</th>
                            <th> Opcja </th>
                            <th> Działania </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.offer.map(
                                offer =>
                                    <tr key={ offer.id }>
                                        <td>{ offer.name }</td>
                                        <td>{ offer.offerCost }</td>
                                        <td>{ offer.isUrgent.toString() }</td>
                                        <td>{ offer.description }</td>
                                        <td>{ offer.option }</td>
                                        <td>
                                            <button style={{marginLeft: "10px"}} onClick={()=> this.editOffer(offer.id)}
                                            className="btn btn-info">
                                                Edytuj
                                            </button>

                                            <button style={{marginLeft: "10px"}} onClick={ () =>
                                                this.viewOffer(offer.id)} className="btn btn-info">Szczegóły oferty </button>


                                            <button style={{marginLeft: "12px"}} onClick={ () =>
                                                this.deleteOffer(offer.id)} className="btn btn-danger">Usuń </button>
                                        </td>


                                    </tr>
                            )
                        }

                        </tbody>
                    </table>
                </div>

            </div>
        )
    }

}
export default GetAllOffers