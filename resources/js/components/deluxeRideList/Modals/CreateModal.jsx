import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                class="modal fade"
                id={`createModal${this.props.modalId}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Casatro de veículo
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DeleteModal;
