import React from "react";
import Headers from "../Components/Headers";
import Table from 'react-bootstrap/Table';

function Pricing() {
    return (
        <>
            <Headers />
            <h1 className="text-danger text-center">MENU BAR</h1>
            <Table striped bordered hover variant="dark" className="mt-3">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Karnataka</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Daal Tadaka</td>
                        <td>350 Rs</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Parota</td>
                        <td>210 Rs</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Poori</td>
                        <td>300 Rs</td>
                    </tr>
                </tbody>
            </Table>
            
            <Table striped bordered hover variant="dark" className="mt-4">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>pizza</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pizza</td>
                        <td>70 Rs</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Meat Pizza</td>
                        <td>100 Rs</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td >cheese Pizza</td>
                        <td>130 Rs</td>
                    </tr>
                </tbody>
            </Table>



        </>
    )
}
export default Pricing;