import * as React from 'react';
import {AgGridReact, AgGridColumn, AgGridColumnProps} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';


class FlightTable extends React.Component {


    colDefs =  [
        {field:"icao"},
        {field:"origin"},
        {field:"destination"},
        {field:"model"}
    ];

    constructor(props){
        super(props);
        this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    render() {
        return(
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '500px',
                        width: '600px'
                    }}
                >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                        getRowNodeId={(data)=>{return data.make}}
                    </AgGridReact>
                </div>

            </div>
        )
    }
}


export default FlightTable