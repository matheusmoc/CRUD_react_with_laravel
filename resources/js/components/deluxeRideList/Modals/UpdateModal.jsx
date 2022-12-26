import axios from "axios";
import React, { Component } from "react";

class UpdateModal extends Component {
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

    //updating car name state
    inputDeluxeCar = (e) => {
        this.setState({
            deluxeCar: e.target.value,
        });
    };

    //updating car name state
    inputDeluxePrice = (e) => {
        this.setState({
            deluxePrice: e.target.value,
        });
    };

    //updating car name state
    inputDeluxeBrand = (e) => {
        this.setState({
            deluxeBrand: e.target.value,
        });
    };

    //updating car name state
    inputDeluxePower = (e) => {
        this.setState({
            deluxePower: e.target.value,
        });
    };

    //updating car name state
    inputDeluxeSpeed = (e) => {
        this.setState({
            deluxeSpeed: e.target.value,
        });
    };

    //updating car name state
    inputDeluxeCons = (e) => {
        this.setState({
            deluxeCons: e.target.value,
        });
    };

    static getDerivedStateFromProps(props, current_state) {
        let deluxeUpdate = {
            deluxeImage: null,
            deluxeCar: null,
            deluxePrice: null,
            deluxeBrand: null,
            deluxePower: null,
            deluxeSpeed: null,
            deluxeCons: null,
        };

        //updating data from input
        if(current_state.deluxeCar && (current_state.deluxeCar !== props.deluxeData.currentDeluxeCar)){
            return null;
        }

        if(current_state.deluxeImage && (current_state.deluxeImage !== props.deluxeData.currentDeluxeImage)){
            return null;
        }

        if(current_state.deluxePrice && (current_state.deluxePrice !== props.deluxeData.currentDeluxePrice )){
            return null;
        }

        if(current_state.deluxeBrand && (current_state.deluxeBrand !== props.deluxeData.currentDeluxeBrand)){
            return null;
        }

        if(current_state.deluxePower && (current_state.deluxePower !== props.deluxeData.currentDeluxePower )){
            return null;
        }

        if(current_state.deluxeSpeed && (current_state.deluxeSpeed !== props.deluxeData.currentDeluxeSpeed )){
            return null;
        }

        if(current_state.deluxeCons && (current_state.deluxeCons !== props.deluxeData.currentDeluxeCons)){
            return null;
        }

        //updating data from props below
        if (current_state.deluxeImage !== props.deluxeData.currentDeluxeImage || current_state.deluxeImage === props.deluxeData.currentDeluxeImage ){
            deluxeUpdate.deluxeImage = props.deluxeData.currentDeluxeImage;
        }

        if (current_state.deluxeCar !== props.deluxeData.currentDeluxeCar || current_state.deluxeCar === props.deluxeData.currentDeluxeCar) {
            deluxeUpdate.deluxeCar = props.deluxeData.currentDeluxeCar;
        }

        if (current_state.deluxePrice !== props.deluxeData.currentDeluxePrice || current_state.deluxePrice === props.deluxeData.currentDeluxePrice) {
            deluxeUpdate.deluxePrice = props.deluxeData.currentDeluxePrice;
        }

        if (current_state.deluxeBrand !== props.deluxeData.currentDeluxeBrand || current_state.deluxeBrand === props.deluxeData.currentDeluxeBrand) {
            deluxeUpdate.deluxeBrand = props.deluxeData.currentDeluxeBrand;
        }

        if (current_state.deluxePower !== props.deluxeData.currentDeluxePower || current_state.deluxePower === props.deluxeData.currentDeluxePower) {
            deluxeUpdate.deluxePower = props.deluxeData.currentDeluxePower;
        }

        if (current_state.deluxeSpeed !== props.deluxeData.currentDeluxeSpeed || current_state.deluxeSpeed === props.deluxeData.currentDeluxeSpeed ) {
            deluxeUpdate.deluxeSpeed = props.deluxeData.currentDeluxeSpeed;
        }

        if (current_state.deluxeCons !== props.deluxeData.currentDeluxeCons || current_state.deluxeCons === props.deluxeData.currentDeluxeCons){
            deluxeUpdate.deluxeCons = props.deluxeData.currentDeluxeCons;
        }

        return deluxeUpdate;
    }

    updateDeluxeData = () => {
        axios.post("/get/update/deluxe/data",{
            deluxeId: this.props.modalId,
            deluxeImage: this.state.deluxeImage,
            deluxeCar: this.state.deluxeCar,
            deluxePrice: this.state.deluxePrice,
            deluxeBrand: this.state.deluxeBrand,
            deluxePower: this.state.deluxePower,
            deluxeSpeed: this.state.deluxeSpeed,
            deluxeCons: this.state.deluxeCons
        })
        .then((response) => (
            // location.reload()
            console.log(response)
        ))
        .catch((error) => console.log(error))
    };

    render() {
        return (
            <div
                className="modal fade"
                id={"updateModal" + this.props.modalId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Modal title
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div> */}
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="d-flex justify-content-evenly align-items-center">
                                    {this.props.deluxeData.isLoading ===
                                    true ? (
                                        <h2> Loading... </h2>
                                    ) : (
                                        <img
                                            className="figure-img img-fluid rounded"
                                            style={{
                                                width: "60vh",
                                                height: "70vh",
                                            }}
                                            src={
                                                this.props.deluxeData
                                                    .currentDeluxeImage
                                            }
                                            alt={
                                                this.props.deluxeData
                                                    .currentDeluxeCar
                                            }
                                        />
                                    )}

                                    <form className="form container-fluid">
                                        <div className="d-flex justify-content-center form-group">
                                            <div className="row col-8">
                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    id="deluxeCar"
                                                    value={
                                                        this.state.deluxeCar ??
                                                        ""
                                                    }
                                                    onChange={
                                                        this.inputDeluxeCar
                                                    }
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Carro
                                                </label>

                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    id="deluxePrice"
                                                    value={
                                                        this.state
                                                            .deluxePrice ?? ""
                                                    }
                                                    onChange={
                                                        this.inputDeluxePrice
                                                    }
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Preço
                                                </label>

                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    id="deluxeBrand"
                                                    value={
                                                        this.state
                                                            .deluxeBrand ?? ""
                                                    }
                                                    onChange={
                                                        this.inputDeluxeBrand
                                                    }
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Marca
                                                </label>

                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    id="deluxePower"
                                                    value={
                                                        this.state
                                                            .deluxePower ?? ""
                                                    }
                                                    onChange={
                                                        this.inputDeluxePower
                                                    }
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Potência
                                                </label>

                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    id="deluxeSpeed"
                                                    value={
                                                        this.state
                                                            .deluxeSpeed ?? ""
                                                    }
                                                    onChange={
                                                        this.inputDeluxeSpeed
                                                    }
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Velociada
                                                </label>

                                                <input
                                                    className="form-control mt-4"
                                                    type="number"
                                                    id="deluxeCons"
                                                    value={
                                                        this.state.deluxeCons ??
                                                        ""
                                                    }
                                                    onChange={
                                                        this.inputDeluxeCons
                                                    }
                                                />
                                                <label className="text-muted fw-semibold mb-5">
                                                    Consumo
                                                </label>
                                                <input
                                                    className="btn btn-dark fw-semibold mt-5"
                                                    type="submit"
                                                    value="Editar"
                                                    onClick={
                                                        this.updateDeluxeData
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default UpdateModal;
