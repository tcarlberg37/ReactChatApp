import React from 'react';
import '../styles.css';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{backgroundColor: this.props.colour }}>
                <h1>WELCOME TO RAINBOW CHAT ROOMS</h1>
                <div id="main">
                    <h2 id="room_name">{this.props.colour.toUpperCase()} ROOM</h2>
                    <div style={{display: 'flex', flexDirection: 'row', maxWidth: '20%'}}>
                        <input id="username" placeholder="Change username" />
                        <button id="change_username">Change Username</button>
                    </div>

                    <div id="chatroom" style={{color: 'black'}}>
                        <p id="typing_message"></p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', maxWidth: '20%'}}>
                        <input id="message" placeholder="Type a message..." />
                        <button id="send_message">SEND</button>
                    </div>
                </div>
                <script src="http://code.jquery.com/jquery-latest.min.js"></script>
                <script src="blue.js"></script>
            </div>
         );
    }
}
 
export default ChatRoom;