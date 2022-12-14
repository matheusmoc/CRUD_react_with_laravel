import axios from "axios";
import React, { Component } from "react";
import ViewModal from "./Modals/ViewModal";

class TableActionButton extends Component {
    constructor(props) {
        super(props);
    }



    //Getting individual deluxe data 

    getDeluxeDetails = (id) => {
        axios.post('/get/individual/deluxe/details', {
            deluxe: id
        }).then((response)=>{
            console.log(response.data);
        })
    }

    render() {
        return (
            <tr
                className="btn-group d-flex justify-content-evenly"
                role="group"
            >
                <button
                    className="btn btn btn btn-outline-info fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {getDeluxeDetails(this.props.eachRowId)}}
                >
                    Visualizar
                </button>
                <ViewModal modalId={this.props.eachRowId}/>

                <button className="btn btn-dark fw-semibold">Editar</button>
                <button className="btn btn-outline-danger fw-semibold">
                    Excluir
                </button>
            </tr>
        );
    }
}
export default TableActionButton;
