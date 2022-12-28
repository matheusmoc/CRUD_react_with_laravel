import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class DeleteModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deluxeImage: null,
            deluxeCar: null,
            deluxePrice: null,
            deluxeBrand: null,
            deluxePower: null,
            deluxeSpeed: null,
            deluxeCons: null,
        };
    }

    //creating car name state
    inputDeluxeCar = (e) => {
        this.setState({
            deluxeCar: e.target.value,
        });
    };

    //creating car name state
    inputDeluxeImage = (e) => {
        this.setState({
            deluxeImage: e.target.value,
        });
    };

    //creating car name state
    inputDeluxePrice = (e) => {
        this.setState({
            deluxePrice: e.target.value,
        });
    };

    //creating car name state
    inputDeluxeBrand = (e) => {
        this.setState({
            deluxeBrand: e.target.value,
        });
    };

    //creating car name state
    inputDeluxePower = (e) => {
        this.setState({
            deluxePower: e.target.value,
        });
    };

    //creating car name state
    inputDeluxeSpeed = (e) => {
        this.setState({
            deluxeSpeed: e.target.value,
        });
    };

    //creating car name state
    inputDeluxeCons = (e) => {
        this.setState({
            deluxeCons: e.target.value,
        });
    };

    //Storing Deluxe Data

    storeDeluxeData = () => {
        axios
            .post("get/store/deluxedata/", {
                deluxeImage: this.state.deluxeImage,
                deluxeCar: this.state.deluxeCar,
                deluxePrice: this.state.deluxePrice,
                deluxeBrand: this.state.deluxeBrand,
                deluxePower: this.state.deluxePower,
                deluxeSpeed: this.state.deluxeSpeed,
                deluxeCons: this.state.deluxeCons,
            })
            .then(() => {
                toast.success("Veículo cadatrado com sucesso!");
                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    };

    render() {
        return (
            <div
                className="modal fade"
                id={`createModal${this.props.modalId}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <form>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    Casatro de veículo
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            className="form-control mb-3"
                                            type="file"
                                            id="deluxeImage"
                                            onChange={this.inputDeluxeImage}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            id="deluxeCar"
                                            placeholder="Informe o modelo"
                                            onChange={this.inputDeluxeCar}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            id="deluxePrice"
                                            placeholder="Informe o preço"
                                            onChange={this.inputDeluxePrice}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            id="deluxeBrand"
                                            placeholder="Informe a bandeira"
                                            onChange={this.inputDeluxeBrand}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            id="deluxePower"
                                            placeholder="Informe a pontência"
                                            onChange={this.inputDeluxePower}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            id="deluxeSpeed"
                                            placeholder="Informe a distâcia entre 0-100 km/h"
                                            onChange={this.inputDeluxeSpeed}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            id="deluxeCons"
                                            placeholder="Informe o cons. l/100km"
                                            onChange={this.inputDeluxeCons}
                                        />
                                    </div>
                                </div>
                            </div>
                            <input
                                className="btn btn-dark btn-modal-register"
                                type="submit"
                                value="Cadastrar"
                                onClick={this.storeDeluxeData}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default DeleteModal;
