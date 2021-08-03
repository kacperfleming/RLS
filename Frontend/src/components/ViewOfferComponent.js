import React, { Component } from 'react'
import OfferService from '../services/OfferService'

class ViewOfferComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            offer: {}
        }
    }

    componentDidMount(){
        OfferService.getOfferById(this.state.id).then(res => {
            this.setState({offer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Szczegóły usługi</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nazwa: </label>
                            <div> { this.state.offer.name }</div>
                        </div>
                        <div className = "row">
                            <label> Cena: </label>
                            <div> { String(this.state.offer.offerCost) }</div>
                        </div>
                        <div className = "row">
                            <label> Czy pilne?: </label>
                            <div> {String(this.state.offer.isUrgent) }</div>
                        </div>
                        <div className = "row">
                            <label> OfferorGroup: </label>
                            <div> { String(this.state.offer.offerorGroup) }</div>
                        </div>
                        <div className = "row">
                            <label> Krótki opis: </label>
                            <div> { String(this.state.offer.description) }</div>
                        </div>
                        <div className = "row">
                            <label> Opcja: </label>
                            <div> { String(this.state.offer.option) }</div>
                        </div>
                        <div className = "row">
                            <label> Kategoria: </label>
                            <div> { String(this.state.offer.category) }</div>
                        </div>
                        <div className = "row">
                            <label> Obszar: </label>
                            <div> { String(this.state.offer.area) }</div>
                        </div>
                        <div className = "row">
                            <label> Dlaczego to robisz?: </label>
                            <div> { String(this.state.offer.reason) }</div>
                        </div>
                        <div className = "row">
                            <label> Płatność: </label>
                            <div> { String(this.state.offer.payment) }</div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOfferComponent