import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li><Link to="/login">Home</Link></li>
                    <li><Link to="/eventHistory">Event History</Link></li>
                    <li><Link to="/chatHistory">Chat History</Link></li>
                    <li><Link to="/roomList">Room List</Link></li>
                    <li><Link to="/chatLobby">Go to Chat Lobby</Link></li>
                </ul>
            </nav>
         );
    }
}
 
export default Navigation;