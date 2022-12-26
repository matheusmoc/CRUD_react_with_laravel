import axios from "axios";
import React, { Component } from "react";
import TableRow from "./TableRow";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deluxes: [],
            isLoading: true,
        };
    }

    //Life cycle method
    componentDidMount() {
        this.getDeluxeRideList();
    }

    //get list
    getDeluxeRideList = async () => {
        await axios
            .get("/get/deluxe/list")
            .then((response) => {
                // console.log(response.data)
                this.setState({
                    deluxes: response.data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    render() {
        return (
            <div className="container">
                <ToastContainer />
                {this.state.isLoading === true ? (
                    <p className="h2"> Loading... </p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" with="100px">
                                    #
                                </th>
                                <th scope="col" with="100px">
                                    Car
                                </th>
                                <th scope="col" with="100px">
                                    Price
                                </th>
                                <th scope="col" with="100px">
                                    Brand
                                </th>
                                <th scope="col" with="100px">
                                    Power
                                </th>
                                <th scope="col" with="100px">
                                    0 - 100 km/h
                                </th>
                                <th scope="col" with="100px">
                                    Cons. l/100km
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.deluxes.map((deluxe, index) => {
                                return <TableRow key={index} data={deluxe} />;
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default Table;
