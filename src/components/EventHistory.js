import React from 'react';
import ReactTable from 'react-table-v6'; // extremely useful table component from https://github.com/tannerlinsley/react-table/tree/v6
import 'react-table-v6/react-table.css';
import axios from 'axios';
import Navigation from './Navigation';

class EventHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [] // holds the data that we will fill with axios get
        }
    }
    columns = [ // array of JSON columns that we pass to ReactTable, accessor must match JSON from API
        {
            Header: 'Type',
            id: 'type',
            accessor: data => data.type
        },
        {
            Header: 'Date',
            id: 'date',
            accessor: data => data.date
        },
        {
            Header: 'Time',
            id: 'time',
            accessor: data => data.time
        },
        {
            Header: 'User',
            id: 'user',
            accessor: data => data.user
        },
        {
            Header: 'Message',
            id: 'message',
            accessor: data => data.message
        },
        {
            Header: 'Room',
            id: 'room',
            accessor: data => data.room
        },
        {
            Header: 'Event ID',
            id: 'eventID',
            accessor: data => data._id
        }
    ];

    componentDidMount() {
        let currentComponent = this; // wouldn't work with calling this.setState, but does if we set this to a variable
        axios.get('http://localhost:3001/api/eventlog').then(res => {
            console.log(res.data);
            if (res.data) {
                currentComponent.setState({
                    data: res.data // store data in component state
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    render() { 
        return ( 
            <div>
                <Navigation />
                <div style={{ margin: '2em'}}>
                    <p>Click on a column header to sort</p>
                    <p>Type in the box below the header to filter</p>
                    <ReactTable
                        data={this.state.data}
                        columns={this.columns}
                        filterable={true}
                        showPagination={true}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        );
    }
}
 
export default EventHistory;