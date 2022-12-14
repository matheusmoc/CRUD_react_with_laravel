import React, { Component } from "react";
import TableActionButton from "./TableActionButton";

class TableRow extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.car}</td>
                <td>$ {this.props.data.price}</td>
                <td>{this.props.data.brand}</td>
                <td>{this.props.data.power}</td>
                <td>{this.props.data.speed}</td>
                <td>{this.props.data.cons}</td>
                <td>
                    <TableActionButton  eachRowId={this.props.data.id}/>
                </td>
            </tr>
        );
    }
}
export default TableRow;
