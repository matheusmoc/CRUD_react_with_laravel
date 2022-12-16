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
                            <div className="d-flex justify-content-evenly">
                                <img
                                    className="figure-img img-fluid rounded"
                                    style={{ height: "80vh", maxWidth: "90vh" }}
                                    src={
                                        this.props.deluxeData.currentDeluxeImage
                                    }
                                    alt=""
                                />
                                <div className="d-flex flex-column">
                                    <div>
                                        Carro:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeCar
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div>
                                        Preço:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxePrice
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div>
                                        Marca:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeBrand
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div>
                                        Potência:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxePower
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div>
                                        Velocidade:{" "}
                                        <strong>
                                            {
                                                this.props.deluxeData
                                                    .currentDeluxeSpeed
                                            }
                                        </strong>
                                    </div>

                                    <hr />

                                    <div>
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
