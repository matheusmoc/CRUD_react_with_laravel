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
                            <div className="d-flex justify-content-evenly align-items-center">
                                
                                {this.props.deluxeData.currentDeluxeImage ==
                                null ? (
                                    <div>
                                        <h1>Carregando...</h1>
                                    </div>
                                ) : (
                                    <img
                                        className="figure-img img-fluid rounded"
                                        style={{
                                            width: "90vh",
                                            height: "90vh",
                                        }}
                                        src={
                                            this.props.deluxeData
                                                .currentDeluxeImage
                                        }
                                        alt={this.props.currentDeluxeCar}
                                    />
                                )}
                                <div className="d-flex flex-column float-right">
                                    <div className="fs-3">
                                        Carro:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeCar
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div className="fs-3">
                                        Preço:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxePrice
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div className="fs-3">
                                        Marca:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeBrand
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div className="fs-3">
                                        Potência:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxePower
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div className="fs-3">
                                        Velocidade:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeSpeed
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div className="fs-3">
                                        Consumo:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeCons
                                            }
                                        </strong>
                                    </div>

                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ViewModal;
