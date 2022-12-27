import React, { Component } from "react";

class ViewModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="modal fade"
                id={"viewModal" + this.props.modalId}
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
                                <div className="d-flex justify-content-end">
                                    {this.props.deluxeData.isLoading ===
                                    true ? (
                                        <h2> Loading... </h2>
                                    ) : (
                                        <img
                                            className="figure-img img-fluid rounded position-relative"
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
                                    <div className="d-flex flex-column position-absolute m-5">
                                        <div className="text-light fs-5">
                                            Carro:{" "}
                                            <strong>
                                                {
                                                    this.props.deluxeData
                                                        .currentDeluxeCar
                                                }
                                            </strong>
                                        </div>
                                        <hr className="text-light"/>
                                        <div className="text-light fs-5">
                                            Preço:{" "}
                                            <strong>
                                                {
                                                    this.props.deluxeData
                                                        .currentDeluxePrice
                                                }
                                            </strong>
                                        </div>
                                        <hr className="text-light"/>
                                        <div className="text-light fs-5">
                                            Marca:{" "}
                                            <strong>
                                                {
                                                    this.props.deluxeData
                                                        .currentDeluxeBrand
                                                }
                                            </strong>
                                        </div>
                                        <hr className="text-light"/>
                                        <div className="text-light fs-5">
                                            Potência:{" "}
                                            <strong>
                                                {
                                                    this.props.deluxeData
                                                        .currentDeluxePower
                                                }
                                            </strong>
                                        </div>
                                        <hr className="text-light"/>
                                        <div className="text-light fs-5">
                                            Velocidade:{" "}
                                            <strong>
                                                {
                                                    this.props.deluxeData
                                                        .currentDeluxeSpeed
                                                }
                                            </strong>
                                        </div>
                                        <hr className="text-light"/>
                                        <div className="text-light fs-5">
                                            Consumo:{" "}
                                            <strong>
                                                {
                                                    this.props.deluxeData
                                                        .currentDeluxeCons
                                                }
                                            </strong>
                                        </div>
                                        <hr className="text-light"/>
                                    </div>
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
export default ViewModal;
