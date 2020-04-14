import React from 'react';

class EditRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room: '', // default room and active props to '', update props when row clicked in RoomList table
            status: ''
        };
      }

    render() {
        let style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '0 0 5em'
          };

        return (
            <div style={style}>
                <form action="http://localhost:3001/editRoom" method="post">
                    <div>
                        <strong style={{margin: '2em'}}>Edit Room:</strong>
                        <label>Room:</label>
                        <input type="text" name="room" required value={this.props.room}/>
                        <label style={{marginLeft: '2em'}}>Status:</label>
                        <select name="status">
                            <option value="Active" selected={this.props.status == 'Active'}>Active</option>
                            <option value="Inactive" selected={this.props.status == 'Inactive'}>Inactive</option>
                        </select>
                        <input type="submit" value="Save" style={{marginLeft: '2em'}}/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default EditRoom;