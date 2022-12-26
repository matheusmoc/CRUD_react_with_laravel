import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }


    deleteDeluxeData = (deluxe) => {
        axios.delete('get/delete/deluxe/data/'+deluxe).then(()=>{
            toast.error('Veículo excluído com sucesso!')
            setTimeout(()=>{
                location.reload();
            }, 2500)
        })
    }

    render() {
        return (
            <div
                className="modal fade"
                id={"deleteModal" + this.props.modalId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            Tem certeza que deseja excluir este veículo ?
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={()=>{this.deleteDeluxeData(this.props.modalId)}}
                                >
                                Sim
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Não
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DeleteModal;
