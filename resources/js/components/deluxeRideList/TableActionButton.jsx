import React, { Component } from "react";

class TableActionButton extends Component {
    constructor(props) {
        super(props);
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
                >
                    Visualizar
                </button>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

                <button className="btn btn-dark fw-semibold">Editar</button>
                <button className="btn btn-outline-danger fw-semibold">
                    Excluir
                </button>
            </tr>
        );
    }
}
export default TableActionButton;
