import axios from "axios";
import React, { Component } from "react";
import ViewModal from "./Modals/ViewModal";
import UpdateModal from "./Modals/UpdateModal";
import DeleteModal from "./Modals/DeleteModal"

class TableActionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Initial state
            currentDeluxeImage: null,
            currentDeluxeCar: null,
            currentDeluxePrice: null,
            currentDeluxeBrand: null,
            currentDeluxePower: null,
            currentDeluxeSpeed: null,
            currentDeluxeCons: null,
            isLoading: true,
        };
    }

    //Getting individual deluxe data

    getDeluxeDetails = async (id) => {
        await axios
            .post("/get/individual/deluxe/details", {
                deluxeId: id,
            })
            .then((response) => {
                this.setState({
                    currentDeluxeImage: response.data.image,
                    currentDeluxeCar: response.data.car,
                    currentDeluxePrice: response.data.price,
                    currentDeluxeBrand: response.data.brand,
                    currentDeluxePower: response.data.power,
                    currentDeluxeSpeed: response.data.speed,
                    currentDeluxeCons: response.data.cons,
                    isLoading: false,
                });
                // console.log(response.data);
            });
    };

    render() {
        return (
            <div
                className="btn-group d-flex justify-content-evenly"
                role="group"
            >
                <button
                    className="btn btn btn btn-outline-info fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target={"#viewModal" + this.props.eachRowId}
                    onClick={() => {
                        this.getDeluxeDetails(this.props.eachRowId);
                    }}
                >
                    Visualizar
                </button>
                <ViewModal
                    modalId={this.props.eachRowId}
                    deluxeData={this.state}
                />

                <button
                    className="btn btn-dark fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateModal" + this.props.eachRowId}
                    onClick={() => {
                        this.getDeluxeDetails(this.props.eachRowId);
                    }}
                >
                    Editar
                </button>
                <UpdateModal
                    modalId={this.props.eachRowId}
                    deluxeData={this.state}
                />

                <button
                    className="btn btn-outline-danger fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteModal" + this.props.eachRowId}
                    onClick={() => {
                        this.getDeluxeDetails(this.props.eachRowId);
                    }}
                >
                    Excluir
                </button>
                <DeleteModal
                    modalId={this.props.eachRowId}
                    deluxeData={this.state}
                />
            </div>
        );
    }
}
export default TableActionButton;
