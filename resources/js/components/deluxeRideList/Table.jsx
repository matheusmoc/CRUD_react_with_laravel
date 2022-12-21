import axios from "axios";
import React, { Component } from "react";
import TableRow from "./TableRow";


class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deluxes: [],
        }
    }

    //Life cycle method
    componentDidMount(){
        this.getDeluxeRideList();
    }

    //get list
     getDeluxeRideList = async () => {
        await axios.get('/get/deluxe/list')
        .then((response)=>{
            // console.log(response.data)
            this.setState({
                deluxes: response.data
            })
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    render(){
        return (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" with="100px">#</th>
                            <th scope="col" with="100px">Car</th>
                            <th scope="col" with="100px">Price</th>
                            <th scope="col" with="100px">Brand</th>
                            <th scope="col" with="100px">Power</th>
                            <th scope="col" with="100px">0-100 km/h</th>
                            <th scope="col" with="100px">Cons. l/100km</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.deluxes.map((deluxe, index)=>{
                            return <TableRow key={index} data={deluxe}/>
                        })}
                    </tbody>
                </table>
        );
    }
}

export default Table;
