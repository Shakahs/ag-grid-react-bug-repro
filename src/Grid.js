import * as React from 'react';
import {AgGridReact, AgGridColumn, AgGridColumnProps} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


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
                {field:"icao"},
                {field:"origin"},
                {field:"destination"},
                {field:"model"}
            ],
            mockData: [{icao:'abc',origin:'lax',destination:'nyc',model:'747'}]
        };

        this.getRowNodeId = this.getRowNodeId.bind(this);
    }

    getRowNodeId(data) {
        return data.icao;
    }

    render() {
        return(
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '500px',
                        width: '600px' }}
                >
                    <AgGridReact
                        // columnDefs={this.colDefs}
                        // enableSorting={true}
                        // enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        //@ts-ignore
                        // deltaRowDateMode={true}
                        // rowData={this.props.demoData.displayedDemographics}>
                        rowData={this.state.mockData}>
                        {/*rowData={sampleSize(demoData.displayedDemographics, 1000)}>*/}
                        getRowNodeId={(data)=>{return data.icao}}
                        {/*getRowNodeId={this.getRowNodeId}*/}
                        >
                    </AgGridReact>
                </div>
            </div>
        )
    }
}


export default FlightTable