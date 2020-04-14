import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import axios from 'axios';
import Navigation from './Navigation';
import EditRoom from './EditRoom';

class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [], // holds the data that we will fill with axios get
            room: '',
            status: ''
        }
    }
    columns = [ // array of JSON columns that we pass to ReactTable, accessor must match JSON from API
        {
            Header: 'Room',
            id: 'room',
            accessor: data => data.room
        },
        {
            Header: 'Created Date',
            id: 'created_date',
            accessor: data => data.created_date
        },
        {
            Header: 'Edit Date',
            id: 'edit_date',
            accessor: data => data.edit_date
        },
        {
            Header: 'Status',
            id: 'status',
            accessor: data => data.status
        },
        {
            Header: ( <a href="/addRoom"><button>Add Room</button></a> ),
            id: 'edit',
            accessor: row => row.index,
            Cell: row => ( // we can use Cell to custom-render html for this column
                <div>
                    <button value={row.index} onClick={e => this.editStatus(e)}>Edit</button>
                    <button value={row.index} onClick={e => this.deleteRow(e)}>Delete</button>
                </div>
            ) 
        }
    ];

    editStatus(event) {
        console.log(event.target.value); // index of the row that was clicked
        var selectedRoom = this.state.data[event.target.value]; // JSON of the data for the clicked row
        console.log(selectedRoom);
        this.setState({room: selectedRoom.room, status: selectedRoom.status});
    }

    deleteRow(event) {
        console.log(event.target.value); // index of the row that was clicked
        var selectedRoom = this.state.data[event.target.value]; // JSON of the data for the clicked row
        console.log(selectedRoom);
        axios.delete('http://localhost:3001/api/deleteRoom', {data: {roomname: selectedRoom.room}}).then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        let currentComponent = this; // wouldn't work with calling this.setState, but does if we set this to a variable
        axios.get('http://localhost:3001/api/roomList').then(res => {
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
                <EditRoom room={this.state.room} status={this.state.status} />
            </div>
        );
    }
}
 
export default RoomList;