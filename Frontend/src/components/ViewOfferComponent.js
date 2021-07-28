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
                            <label> Offer Name: </label>
                            <div> { this.state.offer.name }</div>
                        </div>
                        <div className = "row">
                            <label> Offer Price: </label>
                            <div> { this.state.offer.price }</div>
                        </div>
                        <div className = "row">
                            <label> Availability: </label>
                            <div> { String(this.state.offer.available) }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOfferComponent