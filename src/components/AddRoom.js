import React from 'react';

class AddRoom extends React.Component {
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          };

        return (
            <div style={style}>
                <form action="http://localhost:3001/addRoom" method="post">
                    <div style={style}>
                        <strong>Add New Room:</strong>
                        <div>
                            <label>Room:</label>
                            <input type="text" name="room" required />
                        </div>
                        <div>
                            <label>Status:</label>
                            <select name="status">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <input type="submit" value="Save"/>
                    </div>
                </form>
                <a href="http://localhost:3000/roomList"><button>Cancel</button></a>
            </div>
        );
    }
}
 
export default AddRoom;