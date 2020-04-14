import React from 'react';
import ChatRoom from './ChatRoom';

class ChatLobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            colour: null,
         }
    }

    changeColour(newColour) {
        let currentComponent = this;
        currentComponent.setState({colour: newColour});
    }

    render() { 
        return ( 
            <div>
                <h1>WELCOME TO RAINBOW CHAT ROOMS</h1>
                <h3>Please Choose a Room to Join</h3>
                <div id="links" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <button style={{background: 'red'}} onClick={e => this.changeColour('red')}>RED ROOM</button>
                    <button style={{background: 'orange'}} onClick={e => this.changeColour('orange')}>ORANGE ROOM</button>
                    <button style={{background: 'yellow'}} onClick={e => this.changeColour('yellow')}>YELLOW ROOM</button>
                    <button style={{background: 'green'}} onClick={e => this.changeColour('green')}>GREEN ROOM</button>
                    <button style={{background: 'blue'}} onClick={e => this.changeColour('blue')}>BLUE ROOM</button>
                    <button style={{background: 'indigo'}} onClick={e => this.changeColour('indigo')}>INDIGO ROOM</button>
                    <button style={{background: 'violet'}} onClick={e => this.changeColour('violet')}>VIOLET ROOM</button>
                </div>
                {this.state.colour && <ChatRoom colour={this.state.colour} />}
            </div>
         );
    }
}
 
export default ChatLobby;