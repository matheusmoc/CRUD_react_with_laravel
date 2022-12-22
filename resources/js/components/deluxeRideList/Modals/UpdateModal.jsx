import React, { Component } from "react";

class UpdateModal extends Component {
    constructor(props) {
        super(props);
    }

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
                                    <img
                                        className="figure-img img-fluid rounded"
                                        style={{
                                            width: "60vh",
                                            height: "70vh",
                                        }}
                                        src={this.props.deluxeData.currentDeluxeImage}
                                        alt={this.props.deluxeData.currentDeluxeCar}
                                    />
                                    <form className="form container-fluid">
                                        <div className="d-flex justify-content-center form-group">
                                            <div className="row col-8">
                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Carro
                                                </label>


                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Preço
                                                </label>


                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Marca
                                                </label>


                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Potência
                                                </label>


                                                <input
                                                    className="form-control mt-4"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Velociada
                                                </label>


                                                <input
                                                    className="form-control mt-4"
                                                    type="number"
                                                    name=""
                                                    id=""
                                                />
                                                <label className="text-muted fw-semibold">
                                                    Consumo
                                                </label>
                                            </div>
                                        </div>
                                    </form>
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
export default UpdateModal;
