import axios from "axios";
import React, { Component } from "react";
import ViewModal from "./Modals/ViewModal";

class TableActionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Initial state
            currentDeluxeImage: null,
            currentDeluxeCar: null,
            currentDeluxePrice: 0,
            currentDeluxeBrand: null,
            currentDeluxePower: null,
            currentDeluxeSpeed: null,
            currentDeluxeCons: null,
        }    
    }


    //Getting individual deluxe data 

    getDeluxeDetails = (id) => {
        axios.post('/get/individual/deluxe/details', {
            deluxeId: id
        }).then((response)=>{
            this.setState({ 
                currentDeluxeImage: response.data.image,
                currentDeluxeCar: response.data.car,
                currentDeluxePrice: response.data.price,
                currentDeluxeBrand: response.data.brand,
                currentDeluxePower: response.data.power,
                currentDeluxeSpeed: response.data.speed,
                currentDeluxeCons: response.data.cons
            })
            // console.log(response.data);
        })
    }

    render() {
        return (
            <div
                className="btn-group d-flex justify-content-evenly"
                role="group"
            >
                <button
                    className="btn btn btn btn-outline-info fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {this.getDeluxeDetails(this.props.eachRowId)}}
                >
                    Visualizar
                </button>
                <ViewModal modalId={this.props.eachRowId} dataDeluxe={this.state}/>

                <button className="btn btn-dark fw-semibold">Editar</button>
                <button className="btn btn-outline-danger fw-semibold">
                    Excluir
                </button>
            </div>
        );
    }
}
export default TableActionButton;
