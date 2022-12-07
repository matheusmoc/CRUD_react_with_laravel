import React from "react";

function Table() {
    return (
        <div>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
