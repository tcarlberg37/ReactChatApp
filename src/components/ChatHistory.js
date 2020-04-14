import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import axios from 'axios';
import Navigation from './Navigation';

class ChatHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [] // holds the data that we will fill with axios call
        }
    }
    columns = [ // array of JSON columns that we pass to ReactTable, accessor must match JSON from API
        {
            Header: 'Room',
            id: 'room',
            accessor: data => data.room
        },
        {
            Header: 'Timestamp',
            id: 'timestamp',
            accessor: data => data.timestamp
        },
        {
            Header: 'User',
            id: 'user',
            accessor: data => data.username
        },
        {
            Header: 'Message',
            id: 'message',
            accessor: data => data.message
        },
        {
            Header: 'ID',
            id: 'id',
            accessor: data => data._id
        }
    ];

    componentDidMount() {
        let currentComponent = this; // wouldn't work with calling this.setState, but does if we set this to a variable
        axios.get('http://localhost:3001/api/history').then(res => {
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
 
export default ChatHistory;