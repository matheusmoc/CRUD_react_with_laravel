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
                                    {this.props.deluxeData.currentDeluxeImage == null ? (
                                        <div>
                                            <h1>Carregando...</h1>
                                        </div>
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
                                            alt={this.props.currentDeluxeCar}
                                        />
                                    )}
                                    <div>
                                        <form action="">
                                            <div className="row justify-content-evenly">
                                                
                                                <div className="col col-lg-8 m-3">
                                                    <label for=""></label>
                                                <input className="form-control" type="text" name="" id="" />
                                                </div>
                                                
                                                <div className="col col-lg-8 m-3">
                                                    <label for=""></label>
                                                <input className="form-control" type="text" name="" id="" />
                                                </div>
                                                
                                                <div className="col col-lg-8 m-3">
                                                    <label for=""></label>
                                                <input className="form-control" type="text" name="" id="" />
                                                </div>
                                                
                                                <div className="col col-lg-8 m-3">
                                                    <label for=""></label>
                                                <input className="form-control" type="text" name="" id="" />
                                                </div>
                                                
                                                <div className="col col-lg-8 m-3">
                                                    <label for=""></label>
                                                <input className="form-control" type="text" name="" id="" />
                                                </div>

                                                <div className="col col-lg-8 m-3">
                                                    <label for=""></label>
                                                <input className="form-control" type="text" name="" id="" />
                                                </div>

                                            </div>
                                        </form>
                                    </div>
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
